# Rain UI Components

Reusable UI components for all Rain Frontend projects.

## How to use it

1. Install the following packages in your `vite + Svelte` project:

```shell
$ How to install windi/tailwind?
$ yarn add [link-to-this-repo]
```

**Tip:** How to install windi? Ensure `import "virtual:windi.css"` is included

2. Add a windi.config.ts file like this:

```javascript
import windi
```

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

## Tech Stack

- [Svelte 3](https://svelte.dev/)
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
