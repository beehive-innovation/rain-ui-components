<script lang="ts">
  import Icon from "$lib/components/icons/Icon.svelte"
  import { fade } from "svelte/transition"

  import {
    notificationClasses,
    notification,
    isDefaultNotification,
    removeNotification
  } from "$lib/stores/notifications"
  let showNotification = false
  let notificationClasses_ = notificationClasses()

  notification.subscribe(() => {
    showNotification = !isDefaultNotification($notification)
    notificationClasses_ = notificationClasses()
  })
</script>

{#if showNotification}
  <div
    transition:fade
    id="notification"
    class={`${notificationClasses_} max-w-35rem min-w-20rem min-h-4rem rounded-md flex flex-row flex-nowrap items-center justify-center fixed right-5 top-5 z-30 p-md`}
  >
    <span>{$notification.text}</span>
    <div class="spacer px-sm" />
    <button on:click={removeNotification}><Icon name="cancel" /></button>
  </div>
{/if}
