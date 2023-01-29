import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import {readdir} from 'node:fs/promises'

export const load = (async ({ params }) => {
	let components = []
  	const files = await readdir("./static/docs");
	for (const file of files){
		components.push(file.replace(".api.json", ""))
	}
	if (components) {
		return {names:components};
	}
	
	throw error(404, 'Not found');
}) satisfies PageServerLoad;