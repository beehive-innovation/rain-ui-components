<script lang="ts">
  import Icon from "$lib/components/icons/Icon.svelte"
  import { fade } from "svelte/transition"

  export let slotClass = ""
  export let title = ""
  export let visible = false

  $: hasTitle = (title ?? "").trim().length > 0

  export function show() {
    visible = true
  }

  export function hide() {
    visible = false
  }
</script>

{#if visible}
  <div class="modal p-md" on:click|self={hide}>
    <div
      transition:fade
      id="dialog"
      class="bg-primary rounded-md border-2 border-secondary flex flex-col flex-nowrapz-25 min-h-15rem min-w-30rem max-w-10/12"
    >
      {#if hasTitle}
        <div class="flex flex-row flex-nowrap w-full std-hover p-md" on:click={hide}>
          <p>{title}</p>
          <div class="spacer mx-md" />
          <Icon name="cancel" />
        </div>
      {/if}
      <div class={`${slotClass} overflow-x-hidden overflow-y-scroll h-full`}>
        <slot />
      </div>
    </div>
  </div>
{/if}
