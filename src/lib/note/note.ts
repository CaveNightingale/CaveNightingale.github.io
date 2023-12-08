import { back, background, title } from "$lib/common"
import { writable } from "svelte/store";
import topics from "../generated/topic-list.json";

interface Note {
	title: string;
	url: string;
	sub?: Note[];
}

interface Category {
	title: string,
	sub: Note[],
	url: '', // Category does not have a url, but we need it to be compatible with Note
};

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
	for (let node of topics) {
		for (let sub of node.sub) {
			if (sub.url === path) {
				return sub.title;
			}
		}
	}
	return "";
}


export {
	noteInfo,
	getTitle,
	url,
	type Category,
	type Note,
	topics
}