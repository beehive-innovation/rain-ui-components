<script>import Image from "./Image.svelte";
export let imgToUpload = {};
export let alt = "";
export let img = "";
export let src = "";
const MAX_IMG_SIZE_IN_MB = 100;
let fileinput;
let hasErrors;
$: hasImage = (img?.trim?.() ?? "").length > 0;
$: hasSrc = (src?.trim?.() ?? "").length > 0;
const onFileSelected = (e) => {
    try {
        hasErrors = false;
        imgToUpload = e.target.files[0];
        if (imgToUpload) {
            const imgSize = imgToUpload.size / (1000 * 1000);
            if (imgSize > MAX_IMG_SIZE_IN_MB) {
                hasErrors = true;
            }
            else {
                let reader = new FileReader();
                reader.readAsDataURL(imgToUpload);
                reader.onload = (e) => {
                    img = e.target.result;
                };
            }
        }
    }
    catch (err) {
        console.error(`❌ Smth went wrong reading the img: ${err}`);
        hasErrors = true;
    }
};
</script>

{#if hasErrors}
  <p class="mb-sm text-error">
    The image is too big, please select one that is under {MAX_IMG_SIZE_IN_MB} mb.
  </p>
{/if}

<div
  id="image-picker-wrapper"
  on:click={() => {
    fileinput.click()
  }}
>
  {#if hasImage}
    <Image src={img} {alt} class="media-default" />
  {:else if hasSrc}
    <Image {src} {alt} class="media-default" />
  {:else}
    <Image />
  {/if}
</div>

<input
  accept="image/png, image/jpg, image/jpeg, image/svg"
  class="hidden"
  type="file"
  on:change={(e) => onFileSelected(e)}
  bind:this={fileinput}
/>
