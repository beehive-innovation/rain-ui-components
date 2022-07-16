# Rain UI Components

Reusable UI components for all Rain Frontend projects. Start the application to look up all styles and examples, that will cover most of your questions.

## How to use it

1. Install [windi.css](https://windicss.org/integrations/vite.html) in your `vite + Svelte` project. Ensure `import "virtual:windi.css"` is included in your `main.ts` file.

```shell
$ yarn add https://github.com/beehive-innovation/rain-ui-components // link-to-this-repo
```

2. Copy the `windi.config.ts` from the rain-ui-components repo.

3. Include all styles in your `App.svelte` file:

```html
<script lang="ts>
import "rain-ui-components/src/css/app.scss"
...
</script>
```

4. Add components or functions you want to use like this:

```html
<script lang="ts>
import { Icon, formatAddress } from "rain-ui-components"
...
</script>
```

5. Choose a `data-theme` of light or dark. We recommend including it in the html-tag. Any styles can be found in the `/css` folder.

```html
<html lang="en" data-theme="dark">
  ...
</html>
```

## Tech Stack

- [SvelteKit](https://kit.svelte.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [WindiCSS](https://windicss.org/)

## Run

To run the app on localhost:

```bash
$ yarn
$ yarn dev
```

Use `--host` to expose to local network.

To build and serve:

```bash
$ yarn
$ yarn build
$ serve -s dist
```
