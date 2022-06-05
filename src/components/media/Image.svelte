<script lang="ts">
  import { createEventDispatcher } from "svelte"
  import Icon from "@/components/icons/Icon.svelte"
  import LoadingSpinner from "@/components/loading/LoadingSpinner.svelte"
  export let alt: string = ""
  export let altSources: string[] = []
  export let src: string = "undefined"
  export let imageClass = "std-img"
  export let loadingClass = ""
  export let pressable: boolean = true // Animation purpose only

  let altSourcesIndex = 0
  let errorLoadingImg = false
  let loadedImg = false
  let currentTimeout
  const RETRY_TIMEOUT = 4000
  const dispatch = createEventDispatcher()
  $: imageLoading = !loadedImg && !errorLoadingImg

  // Will retry loading an alternative source, if the current times out or fails
  function retrySource(err) {
    if (loadedImg || errorLoadingImg) {
      return false
    } else if (altSourcesIndex >= altSources.length) {
      errorLoadingImg = true
      dispatch("error")
      return false
    }
    clearTimeout(currentTimeout)
    src = altSources[altSourcesIndex]
    altSourcesIndex += 1
    currentTimeout = setTimeout(retrySource, RETRY_TIMEOUT)
  }

  function onLoad(evt) {
    clearTimeout(currentTimeout)
    loadedImg = true
  }
</script>

{#if errorLoadingImg}
  <div class={`media-default--placeholder ${imageClass} ${$$props.class} ${pressable && "pressable"}`}>
    <Icon icon="image" width={30} />
  </div>
{:else}
  <img
    tabindex="0"
    class={`${imageClass} ${$$props.class} ${pressable && "pressable"} ${imageLoading && "hidden"}`}
    {alt}
    {src}
    on:click={(evt) => dispatch("click", evt)}
    on:error={retrySource}
    on:load={onLoad}
  />
  {#if imageLoading}
    <div
      class={`${imageClass} ${loadingClass} ${$$props.class} w-full flex items-center justify-center rounded-md border-1 border-dotted border-secondary`}
    >
      <LoadingSpinner text="" />
    </div>
  {/if}
{/if}
