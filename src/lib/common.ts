import Popup from "./Popup.svelte"
const popupList: any[] = [];
function showPopup(title: string) {
	const popup = new Popup({
		target: document.body,
		props: {
			title,
			top: popupList.length
		}
	});
	popupList.push(popup);
	setTimeout(() => {
		popup.fadeout();
		setTimeout(() => popup.$destroy(), 400);
		let index = popupList.indexOf(popup);
		popupList.splice(index);
		for(let i = index; i < popupList.length; i++) {
			popupList[i].move(i);
		}
	}, 1000);
}

export {
	showPopup
}
