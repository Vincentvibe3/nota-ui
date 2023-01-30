
import {readdirSync, writeFileSync} from 'node:fs'
import { sveld } from 'sveld';

export default async function sveldProcess(path) {
	await sveld({
		json: true,
		jsonOptions: {
		  outDir: "static/docs",
		},
	  })
	let components = []
	const files = readdirSync("./static/docs");
	for (const file of files){
		components.push(file.replace(".api.json", ""))
	}
	let output = JSON.stringify(components)
	writeFileSync(`./${path}/components.json`,output)
}
