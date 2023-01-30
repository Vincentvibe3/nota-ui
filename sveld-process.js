const fileRegex = /\.(my-file-ext)$/

import {readdirSync, writeFileSync} from 'node:fs'

export default function sveldProcess(path) {
	let components = []
	const files = readdirSync("./static/docs");
	for (const file of files){
		components.push(file.replace(".api.json", ""))
	}
	let output = JSON.stringify(components)
	writeFileSync(`./${path}/components.json`,output)
}
