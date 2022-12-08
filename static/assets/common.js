// This file is here for the text rendering
(function () {
	function obf(ele) {
		if (ele instanceof HTMLElement) {
			for (let c of ele.childNodes) {
				obf(c)
			}
		} else {
			ele.textContent = ele.textContent.replace(/[a-zA-Z]/g, () => 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'[Math.floor(Math.random() * 26 * 2)]);
		}
	}
	setInterval(() => {
		for (let ele of document.getElementsByClassName("obfuscated")) {
			obf(ele);
		}
	}, 50);
})();