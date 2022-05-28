<script lang="ts">
  import { createEventDispatcher } from "svelte"
  import Icon from "@/components/icons/Icon.svelte"
  export let src: string = "undefined"
  export let alt: string = ""
  export let pressable: boolean = true // Animation purpose only

  const dispatch = createEventDispatcher()
  $: errorLoadingImg = false
</script>

{#if errorLoadingImg}
  <div class={`media-default--placeholder std-img ${$$props.class} ${pressable && "pressable"}`}>
    <Icon name="image" width={30} />
  </div>
{:else}
  <img
    tabindex="0"
    class={`${classes} ${pressable && "pressable"} std-img`}
    {src}
    {alt}
    on:click={(evt) => dispatch("click", evt)}
    on:error={() => (errorLoadingImg = true)}
  />
{/if}
