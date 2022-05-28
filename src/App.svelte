<script lang="ts">
  import "@/css/app.scss"

  function toggleTheme() {
    const theme = document.documentElement.getAttribute("data-theme")
    document.documentElement.setAttribute("data-theme", theme == "dark" ? "light" : "dark")
  }
</script>

<h1>Welcome to Rain UI Components.</h1>

<section>
  <h2>Themes</h2>
  <button class="btn-secondary" on:click={toggleTheme}>Toggle theme</button>
</section>

<section>
  <h2>Buttons</h2>
  <p>To use a buttons with these styles, apply the following classes:</p>
  <button class="btn-primary">btn-primary</button>
</section>

<style>
  section {
    @apply mt-md flex flex-col flex-nowrap w-full;
  }

  h2 {
    @apply uppercase;
  }

  p {
    @apply my-sm;
  }
</style>
