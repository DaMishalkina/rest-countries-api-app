import { vitePreprocess } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		paths: { assets: "", base: process.env.NODE_ENV === "production" ? "/rest-countries-api-app" : "" },
		adapter: adapter({
			// NOT HERE!
			// paths: { base: "/PERSONAL_PATH" },
			fallback: 'index.html',
			precompress: false,
		})
	}
};

export default config;
