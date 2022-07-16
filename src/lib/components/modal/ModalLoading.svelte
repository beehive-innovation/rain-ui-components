<script lang="ts">
  import { fade } from "svelte/transition"
  import { modal, hideModal } from "$lib/stores/modal"

  function checkForClose() {
    if ($modal.closeable) {
      hideModal()
    }
  }
</script>

{#if $modal.showing}
  <div class="modal z-30" on:click={checkForClose}>
    <div
      transition:fade
      id="modal"
      class="bg-secondary rounded-md flex flex-row flex-nowrap items-center justify-center p-md h-10rem w-20rem"
    >
      <div class="loader mr-md" />
      <h2>{$modal.message}</h2>
    </div>
  </div>
{/if}

<style>
  .loader {
    @apply border-2 border-solid rounded-full border-gray-200
           border-t-2 border-t-black
           w-1.5rem h-1.5rem;
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
