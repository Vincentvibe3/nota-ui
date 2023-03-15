
import {readdir, writeFile} from 'node:fs/promises'
import { sveld } from "sveld"

export default async function sveldProcess(path) {
	await sveld({
		json: true,
		glob: true,
		jsonOptions: {
			outDir: `${path}/docs`,
		},
		})
	console.log("Sveld done")
	let components = []
	let files = await readdir(`./${path}/docs`);
	while (files.length==0){
		files = await readdir(`./${path}/docs`);	
	}
	
	for (const file of files){
		components.push(file.replace(".api.json", ""))
	}
	let output = JSON.stringify(components)
	await writeFile(`./${path}/components.json`,output)
	console.log("Wrote components.json")
}
