import { back, background, title } from "$lib/common"
import { writable } from "svelte/store";

let url = writable("");

function noteInfo(_title: string, _back: string, name: string) {
	title.set("笔记 - " + _title);
	background.set(false);
	back.set(_back);
	url.set(_back + '/' + name);
}

export {
	noteInfo,
	url
}