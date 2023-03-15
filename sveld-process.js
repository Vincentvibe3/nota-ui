
import {readdir, appendFile, writeFile } from 'node:fs/promises'
import { createReadStream } from 'node:fs'
import * as readline from "node:readline";
import { sveld } from "sveld"

export default function sveldProcess({path}) {
	return {
		name:"sveld-process",
		// apply(config, { command }) {
		// 	// apply only on build but not for SSR
		// 	return command === 'build' || command === "dev"
		// },
		buildStart: async () => {
			await processTs("./src/lib/index.ts")
			await sveld({
				input: "./src/lib/index.js",
				json: true,
				glob: true,
				jsonOptions: {
					outDir: `${path}/docs`,
				},
			})
			// await unlink("./temp-index.js")
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
	}	
}

async function processTs(path){
	let dest = path.replace(".ts", ".js")
	console.log(`generating ${dest}`)
	await writeFile(dest, "")
	const fileStream = createReadStream(path);
	const rl = readline.createInterface({
		input: fileStream,
		crlfDelay: Infinity,
	  });
	  let needClosingBracket = false;
	  for await (const line of rl) {
		// Each line in input.txt will be successively available here as `line`.
		if (line.includes("export type")){
			needClosingBracket=true
		}
		if (!needClosingBracket){
			await appendFile(dest, `${line}\n`)
		}
		if (line.includes("}")){
			needClosingBracket=false
		}
	}
}