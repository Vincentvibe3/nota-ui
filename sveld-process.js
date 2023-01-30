
import {readdir, writeFile} from 'node:fs/promises'
import { sveld } from "sveld"

export default async function sveldProcess(path) {
	await sveld({
		json: true,
		jsonOptions: {
			outDir: "static/docs",
		},
		})
	console.log("Sveld done")
	let components = []
	let files = await readdir("./static/docs");
	while (files.length==0){
		files = await readdir("./static/docs");	
	}
	
	for (const file of files){
		components.push(file.replace(".api.json", ""))
	}
	let output = JSON.stringify(components)
	await writeFile(`./${path}/components.json`,output)
	console.log("Wrote components.json")
}
