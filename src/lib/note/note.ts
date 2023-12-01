import { back, background, title } from "$lib/common"
import { writable } from "svelte/store";
import { topics, type Note } from "./topic-list";

let url = writable("");

/**
 * Set some information about the note
 * This is a wrapper of pageInfo
 * @param _title The title of the page
 * @param _back The upper level of the note
 * @param name The name of the note
 */
function noteInfo(_title: string, _back: string, name: string) {
	title.set("笔记 - " + _title);
	background.set(false);
	back.set(_back);
	url.set(_back + '/' + name);
}

/**
 * Get the title of the note by its path in O(n) time
 * @param path The path of the note
 * @returns The title of the note, specified in the topic list
 * @throws If the note does not exist
 */
function getTitle(path: string): string {
	let dfs = (node: Note, path: string): string | null => {
		if (node.url === path) {
			return node.title;
		}
		for (let sub of node.sub || []) {
			let res = dfs(sub, path);
			if (res !== null) {
				return res;
			}
		}
		return null;
	}
	for (let node of topics) {
		let res = dfs(node, path);
		if (res !== null) {
			return res;
		}
	}
	throw new Error("No such note `" + path + "`");
}

export {
	noteInfo,
	getTitle,
	url
}