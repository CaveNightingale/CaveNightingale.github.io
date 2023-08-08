import { back, background, title } from "$lib/common"

function noteInfo(_title: string, _back: string) {
	title.set("笔记 - " + _title);
	background.set(false);
	back.set(_back);
}

export {
	noteInfo
}