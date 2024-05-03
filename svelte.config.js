import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";
import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/kit/vite";
import fs from "fs";
import path from "path";


/**
 * Parse the markdown content of the note and get its meta information
 * @param markdown The markdown content of the note
 * @returns an object containing the meta information of the note
 */
function parseMeta(markdown) {
	let meta = markdown.match(/---\n([\s\S]*)\n---/)?.[1];
	if (!meta) {
		return {};
	}
	let res = {};
	for (let line of meta.split('\n')) {
		let [key, value] = line.split(':');
		res[key.trim()] = value.trim();
	}
	return res;
}

/**
 * Parse the title of the note from its markdown content
 * @param markdown The markdown content of the note
 * @returns The first largest title of the note
 */
function parseTitle(markdown) {
	let title = markdown.match(/# (.*)/)?.[1];
	if (!title) {
		return "";
	}
	return title;
}

/**
 * Turn a category name into its internal representation
 * @param category A category name, e.g. "Number Theory"
 * @returns snake case of the category name, e.g. "number-theory"
 */
function toSnakeCategory(category) {
	return category.toLowerCase().replace(/ |'/g, '-');
}

function scanNotes() {
	let root = 'src/routes/note';
	let output = 'src/lib/generated/topic-list.json';
	if (!fs.existsSync(path.dirname(output))) {
		fs.mkdirSync(path.dirname(output), { recursive: true });
	}
	let lastGeneratedTime = fs.existsSync(output) ? fs.statSync(output).mtimeMs : 0;
	let lastSourceTime = fs.statSync(root).mtimeMs;

	let res = {};
	for (let file of fs.readdirSync(root)) {
		let path = root + '/' + file + '/+page.md';
		if (fs.existsSync(path)) {
			lastSourceTime = Math.max(lastSourceTime, fs.statSync(path).mtimeMs);
			let md = fs.readFileSync(path, 'utf-8');
			let meta = parseMeta(md);
			let category = meta.category || 'Uncategorized';
			let title = parseTitle(md);
			let url = '/note/' + file;
			let snakeCategory = toSnakeCategory(category);
			if (!res[snakeCategory]) {
				res[snakeCategory] = {
					title: category,
					sub: [],
					url: '',
				}
			}
			res[snakeCategory].sub.push({ title, url });
		}
	}
	if (lastGeneratedTime >= lastSourceTime) {
		return;
	}
	let json = Object.values(res);
	json.sort((a, b) => a.title.localeCompare(b.title));
	let str = JSON.stringify(json);
	fs.writeFileSync(output, str);
}

function patchJsGraphs() { // Fix the jsgraphs import bug
	let from = "import { ERROR_MSG_EDGE_NOT_FOUND } from '../common/errors';";
	let to = "import { ERROR_MSG_EDGE_NOT_FOUND } from '../common/errors.mjs';";
	let path = 'node_modules/@mlarocca/jsgraphs/src/graph/graph.mjs';
	let content = fs.readFileSync(path, 'utf-8');
	if (content.includes(from)) {
		fs.writeFileSync(path, content.replace(from, to));
	}
}

patchJsGraphs();

const config = {
	extensions: [".svelte", ...mdsvexConfig.extensions],

	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [{ markup: scanNotes }, vitePreprocess(), mdsvex(mdsvexConfig)],

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({
			pages: "docs",
			assets: "docs",
		}),
	},
};

export default config;
