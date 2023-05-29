// import { sveltekit } from '@sveltejs/kit/vite';
// // import icons from 'unplugin-icons/vite';
// // import kitDocs from '@svelteness/kit-docs/node';
// import WindiCSS from "vite-plugin-windicss";
// import visualizer from "rollup-plugin-visualizer";
// import { defineConfig } from 'vite'
// import path from 'path';

// /** @type {import('vite').UserConfig} */
// // const config = {
// //   plugins: [
// //     // icons({ compiler: 'svelte' }),
// //     // kitDocs(),
// //     sveltekit(),
// //     WindiCSS.default(),
// //     visualizer.default(),
// //   ],
// // };

// const config = defineConfig({
//   plugins: [
//     WindiCSS.default(),
//     visualizer.default(),
//     sveltekit(),
//   ],

//   resolve: {
//     alias: {
//       $routes: path.resolve('./src/routes')
//     }
//   },

//   server: {
//     port: 5000,
//   },

//   preview: {
//     port: 5678,
//   },
// });

// export default config;


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
