import preprocess from "svelte-preprocess";
import adapterStatic from "@sveltejs/adapter-static";
import { defineConfig as defineViteConfig } from "vite";
import WindiCSS from "vite-plugin-windicss";
import visualizer from "rollup-plugin-visualizer";
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
export default {
	preprocess: preprocess({
		preserve: ["module"],
	}),
	// preprocess: vitePreprocess(),
	kit: {
		adapter: adapterStatic(),
		prerender: {
			// default: true,
      entries: ['*'],
      handleMissingId: 'warn',
		},
	},
};
