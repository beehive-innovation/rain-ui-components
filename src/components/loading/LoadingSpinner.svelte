<script lang="ts">
  export let text = "Loading..."
</script>

<div class={`${$$props.class} flex flex-row flex-nowrap items-center justify-center`}>
  <div class="loader" />
  {#if text && text.trim().length > 0}
    <h2 class="ml-md">{text}</h2>
  {/if}
</div>
