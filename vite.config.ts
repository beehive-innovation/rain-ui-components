import path from "path"
import { defineConfig } from "vite"
import { svelte } from "@sveltejs/vite-plugin-svelte"
import WindiCSS from "vite-plugin-windicss"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    WindiCSS({
      scan: {
        dirs: ["./src"],
        fileExtensions: ["svelte", "js", "ts", "html"]
      }
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "./src/index.js"),
      name: "rain-ui-components",
      fileName: (format) => `rain-ui-components.${format}.js`
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["svelte"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          svelte: "Svelte"
        }
      }
    }
  }
})
