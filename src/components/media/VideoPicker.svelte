<script lang="ts">
  import Video from "@/components/media/Video.svelte"
  export let src: string = ""
  export let video: string = ""
  export let animationToUpload: any = {}

  const MAX_VIDEO_SIZE_IN_MB = 100
  let fileinput
  let hasErrors

  $: hasSrc = (src?.trim?.() ?? "").length > 0
  $: hasVideo = (video?.trim?.() ?? "").length > 0

  const onFileSelected = (e) => {
    try {
      hasErrors = false
      animationToUpload = e.target.files[0]
      if (animationToUpload) {
        const animationSize = animationToUpload.size / (1000 * 1000)
        if (animationSize > MAX_VIDEO_SIZE_IN_MB) {
          hasErrors = true
        } else {
          let reader = new FileReader()
          reader.readAsDataURL(animationToUpload)
          reader.onload = (e) => {
            video = e.target.result
          }
        }
      }
    } catch (err) {
      console.error(`❌ Smth went wrong reading the video: ${err}`)
      hasErrors = true
    }
  }
</script>

{#if hasErrors}
  <p class="mb-sm text-error">
    The animation is too big, please select one that is under {MAX_VIDEO_SIZE_IN_MB} mb.
  </p>
{/if}

<div
  id="video-picker-wrapper"
  on:click={() => {
    fileinput.click()
  }}
>
  {#if hasVideo}
    <Video src={video} class="media-default" />
  {:else if hasSrc}
    <Video {src} class="media-default" />
  {:else}
    <Video />
  {/if}
</div>

<input
  class="hidden"
  type="file"
  accept=".mp4, .gif, .webm"
  on:change={(e) => onFileSelected(e)}
  bind:this={fileinput}
/>
