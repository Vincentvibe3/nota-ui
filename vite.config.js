import { sveltekit } from '@sveltejs/kit/vite';
import { sveld } from 'sveld';
import sveldProcess from './sveld-process';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit(), 
		sveld({
		  json: true,
		  jsonOptions: {
			outDir: "static/docs",
		  },
		}),
		sveldProcess("static")
	]
};

export default config;
