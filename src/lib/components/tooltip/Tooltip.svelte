<script>
  import Icon from "$lib/components/icons/Icon.svelte"
  import { fly } from "svelte/transition"
  export let message
  let visible, tooltipIcon, tooltipSlot, x, y
  const MIN_PADDING = 10

  function show() {
    const iconRect = tooltipIcon.getBoundingClientRect()
    x = iconRect.left
    y = iconRect.top
    visible = true
  }

  function hide() {
    visible = false
  }

  $: if (tooltipSlot) {
    const slotRect = tooltipSlot.getBoundingClientRect()
    // Prevent left/right overlap
    if (x - slotRect.width <= MIN_PADDING) {
      x = MIN_PADDING
    } else if (x + slotRect.width >= window.innerWidth - MIN_PADDING) {
      x = window.innerWidth - slotRect.width - MIN_PADDING
    }
    // Prevent top/bottom overlap
    if (y + slotRect.height <= MIN_PADDING) {
      y = slotRect.height + MIN_PADDING
    } else if (y + slotRect.height >= window.innerHeight - MIN_PADDING) {
      y = window.innerHeight - slotRect.height - MIN_PADDING
    }
  }
</script>

<div class="max-w-1rem" bind:this={tooltipIcon} on:mouseenter={show} on:mouseleave={hide}>
  <Icon name="info" />
</div>

{#if visible}
  <div
    bind:this={tooltipSlot}
    on:mouseenter={show}
    on:mouseleave={hide}
    transition:fly={{ y: 10, duration: 500 }}
    style="top: {y}px; left: {x}px;"
    class="bg-secondary flex flex-col flex-nowrap rounded-md fixed transform translate-x-1/8 p-sm z-30"
  >
    {#if message}
      <span>{message}</span>
    {/if}
    <slot />
  </div>
{/if}
