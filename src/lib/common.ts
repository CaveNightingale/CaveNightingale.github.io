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

/**
 * Show a popup on the top-right corner of the screen for a certain amount of time
 * @deprecated I don't think this is a good interaction design. Display messages closed to the content is better.
 * @param title The title of the popup
 * @param content The content of the popup
 * @param timeMS The time in milliseconds the popup will show
 * @param callback The callback function after the popup is shown
 */
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

/**
 * Set some information about the page
 * This function will setup the title of the page, the topbar (title, back button), and the background
 * @param _title The title of the page, will be used as the title of the page and the topbar
 * @param _back Where the back button will lead to. If it is a function, it will be called when the back button is clicked. If it is a string, it will be used as the url of the back button. If it is null, the back button will be hidden.
 * @param _background If the background should be shown
 * @param _scable If the page should be scable on mobile devices
 */
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
