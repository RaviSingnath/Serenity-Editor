import preprocess from "svelte-preprocess";
import adapterStatic from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
export default {
	preprocess: preprocess({
		preserve: ["module"],
	}),
	kit: {
		adapter: adapterStatic(),
		prerender: {
      entries: ['*'],
      handleMissingId: 'warn',
		},
	},
};
