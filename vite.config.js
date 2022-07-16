import WindiCSS from "vite-plugin-windicss"
import { sveltekit } from "@sveltejs/kit/vite"
import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    sveltekit(),
    WindiCSS({
      scan: {
        dirs: ["src"],
        fileExtensions: ["svelte", "js", "ts", "html"]
      }
    })
  ]
})
