import { sveltekit } from '@sveltejs/kit/vite';
import WindiCSS from 'vite-plugin-windicss/dist/index.mjs';
import visualizer from "rollup-plugin-visualizer";

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [
    WindiCSS(),
    visualizer.default(),
    sveltekit()
  ],
};

export default config;
