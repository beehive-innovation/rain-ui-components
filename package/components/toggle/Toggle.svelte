<script>export let label = "";
export let toggled = false;
</script>

<div on:click={() => (toggled = !toggled)} class="flex flex-row flex-nowrap items-center">
  <span class="mr-md">{label}</span>
  <div class="spacer" />
  <label class="switch">
    <input type="checkbox" bind:checked={toggled} />
    <span class="slider round" />
  </label>
</div>

<style>.switch {
  @apply relative pointer-events-none;
  width: 3rem;
  height: 1.5rem;
}

/* Hide default HTML checkbox */
.switch input {
  @apply opacity-0 w-0 h-0;
}

.slider {
  @apply bg-secondary absolute top-0 left-0 right-0 bottom-0 transition duration-300 ease-in-out cursor-pointer;
}

.slider:before {
  @apply bg-white absolute transition duration-300 ease-in-out cursor-pointer;
  content: "";
  height: 1.5rem;
  width: 1.5rem;
}

input:checked + .slider {
  background-color: var(--green);
}

input:checked + .slider:before {
  transform: translateX(100%);
}

.slider.round {
  @apply rounded-3xl;
}

.slider.round:before {
  @apply rounded-full;
}</style>
