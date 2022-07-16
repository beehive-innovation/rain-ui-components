<script>import { createEventDispatcher } from "svelte";
import Icon from "../icons/Icon.svelte";
export let src = "undefined";
export let pressable = true; // Animation purpose only
const dispatch = createEventDispatcher();
$: errorLoadingVideo = false;
</script>

{#if errorLoadingVideo}
  <div class={`media-default--placeholder std-video ${$$props.class} ${pressable && "pressable"}`}>
    <Icon name="video" width={30} />
  </div>
{:else}
  <video
    autoplay
    loop
    muted
    class={`rounded-md ${$$props.class} ${pressable && "pressable"}`}
    {src}
    on:click={(evt) => dispatch("click", evt)}
    on:error={() => (errorLoadingVideo = true)}
  />
{/if}
