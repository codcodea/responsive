
/* 
		Handers for transitions and side effects
*/

import store from "./store.js";
import handleDevice from "./hDevice.js";

// DOM 
const overlay = document.querySelector(".overlay");
const iframe = document.querySelector("iframe");

// opens a new window
export function openWindow(path) {
	window.open(path, "_blank");
}

// handle css transition effects
export function transition() {
	overlay.classList.toggle("active-overlay");
	overlay.ontransitionend = () => overlay.classList.remove("active-overlay");
	overlay.ontransistioncancel = () => overlay.classList.remove("active-overlay");
}

// scroll to top of iframe
export function scrollToTop() {
	iframe.contentWindow.scrollTo({
		top: 0,
		left: 0,
		behavior: "smooth",
	});
}

// toggle device frame visibility ON/OFF
export function toggleFrame() {
	const currentDeviceClass = store.getCurrentDeviceClass();
	const currentDeviceElement = document.querySelector(`.${currentDeviceClass}`);
	store.toggleFrame();
	currentDeviceElement.classList.toggle("active");
}

// handle special case when user resizes the screen manually
export function toMobile(e) {
	if (e.matches) {
		handleDevice(e, true); // change device format to mobile
	}
}
