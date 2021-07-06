import preprocess from 'svelte-preprocess';
import node from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors

	preprocess: preprocess(), //originally

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};


export default {
	preprocess: preprocess(),
	kit: {
		target: '#svelte',
		adapter: node({ out: 'output-dir' })

	}
};
//export default config;
