import { sveltekit } from '@sveltejs/kit/vite';
import sveldProcess from './sveld-process';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit(), 
		sveldProcess({path:"static"}),
	]
};

export default config;
