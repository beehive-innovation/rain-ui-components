import plugin from "windicss/plugin"
import { defineConfig } from "windicss/helpers"

export function windiConfig() {
  return defineConfig({
    preflight: true,
    theme: {
      extend: {
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px"
        },
        fontFamily: {},
        spacing: {
          xs: "0.25rem",
          sm: "0.5rem",
          md: "1.0rem",
          lg: "2.0rem",
          xl: "4.0rem"
        },
        colors: {
          primary: "var(--primary)",
          secondary: "var(--secondary)",
          green: "var(--green)",
          red: "var(--red)",
          "red-darker": "var(--red-darker)"
        }
      }
    },
    plugins: [
      plugin(({ addBase, theme }) => {
        addBase({
          h1: { fontSize: theme("fontSize.2xl") },
          h2: { fontSize: theme("fontSize.xl") },
          h3: { fontSize: theme("fontSize.lg") }
        })
      })
    ]
  })
}
