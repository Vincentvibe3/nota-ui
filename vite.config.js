import { sveltekit } from '@sveltejs/kit/vite';
import sveldProcess from './sveld-process';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit(), 
		{
			...sveldProcess("static"),
			enforce:"post",
		}
	]
};

export default config;
