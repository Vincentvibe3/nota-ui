import { sveltekit } from '@sveltejs/kit/vite';
import { sveld } from 'sveld';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit(), 
		sveld({
		  json: true,
		  jsonOptions: {
			outDir: "static/docs",
		  },
		})
	]
};

export default config;
