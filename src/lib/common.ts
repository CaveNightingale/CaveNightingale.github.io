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
	if(popups[0].status() == 'hide' && (popups[1].status() == 'hide' || popups[1].status() == 'fadeout')) {
		popups[0].run(title, content, timeMS, callback);
	} else if(popups[0].status() == 'fadeout' && popups[1].status() == 'hide') {
		popups[1].run(title, content, timeMS, callback);
	} else {
		queue.push(() => showPopup(title, content, timeMS, callback));
	}
}

function notifyNext() {
	let next = queue.shift();
	if(next) next();
}

let root: ((content: any) => void) | null = null; // This is used by root component
function setRoot(component: any) {
	if(root != null)
		throw new Error("There should be no more that one root component per page");
	root = component;
}

function openPage(url: string, component: any) {
	if(root == null)
		throw new Error("Can't find root component");
	root(component);
	history.pushState({}, '', url);
}

export {
	showPopup,
	providePopup,
	notifyNext,
	setRoot,
	openPage
}
