import { writable, type Writable } from "svelte/store";

interface Popup {
	run: (title: string, content?: string, timeMS?: number, callback?: () => void) => void
	status: () => 'hide' | 'fadein' | 'fadeout' | 'show';
}

let popups: Popup[] = [];
let queue: (() => void)[] = [];

function providePopup(popup: Popup) {
	popups.push(popup);
}

function showPopup(title: string, content?: string, timeMS?: number, callback?: () => void) {
	if (popups[0].status() == 'hide' && (popups[1].status() == 'hide' || popups[1].status() == 'fadeout')) {
		popups[0].run(title, content, timeMS, callback);
	} else if (popups[0].status() == 'fadeout' && popups[1].status() == 'hide') {
		popups[1].run(title, content, timeMS, callback);
	} else {
		queue.push(() => showPopup(title, content, timeMS, callback));
	}
}

function notifyNext() {
	let next = queue.shift();
	if (next) next();
}

let title = writable("");
let back: Writable<(() => void) | string | null> = writable(null);
let background = writable(true);
let scable = writable(false);

function pageInfo(_title: string, _back: (() => void) | string | null = '/', _background: boolean = true, _scable: boolean = false) {
	title.set(_title);
	back.set(_back);
	background.set(_background);
	scable.set(_scable);
}

export {
	showPopup,
	providePopup,
	notifyNext,
	title,
	back,
	background,
	scable,
	pageInfo
}
