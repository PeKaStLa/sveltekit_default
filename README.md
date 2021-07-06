sveltekit project with tailwindCSS set up. "__layout.svelte", error-Page, multiple Pages, a example with nested components,TypeScript-usage, input bindings and TailwindCSS-usage. Fully responsive Navbar and Grid/Kanban-Board.



# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte);

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm init svelte@next

# create a new project in my-app
npm init svelte@next my-app
```

> Note: the `@next` is temporary

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

Before creating a production version of your app, install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. Then:

```bash
npm run build
```

> You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.


--------------------------------------------
# Creation of this project:

1. npm init svelte@next
->  Skeleton project
-> TypeScript - Yes
-> ESLint - Yes
-> Prettier - Yes
2. npm install @sveltejs/adapter-node@next
3. For TypeScript-Support and Build-Node-Adapter added to svelte.config.js:
import node from '@sveltejs/adapter-node';
//[...]
export default {
	preprocess: preprocess(),
	kit: {
		target: '#svelte',
		adapter: node({ out: 'output-dir' })

	}
};
//export default config;

4. npm install -D tailwindcss autoprefixer
5. create postcss.config.cjs with 
module.exports = {
  plugins: {
    autoprefixer: {},
    tailwindcss: {},
  },
} 
6. create tailwind.config.cjs with
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.svelte'],
}
7. create __layout.svelte and add
<nav>
	<a href=".">Home</a>
</nav>
<slot></slot>
<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>

followed these instructions:
https://jsco.dev/blog/how-to-set-up-tailwindcss-with-svelte-kit