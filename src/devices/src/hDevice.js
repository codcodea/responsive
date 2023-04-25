
/* 
	This handler is responsible for toggling devices.
		- get and set device state to store
		- update DOM accordingly
		- call side effects
*/

import store from "./store.js";
import { openWindow, transition, scrollToTop } from "./effects.js";

const device = document.querySelector("#device-section");
const devices = document.querySelectorAll(".container .devices");
const iframe = document.querySelector("iframe");

function handleDevice(e, mobile = false) {

	// open wireframes
	if (e.target.id === "wireframe") return openWindow(store.getWireframePath());

	// get and set state
	const currentDevice = store.getDevice();
	const replaceDevice = mobile ? "mobile" : e.currentTarget.id;
	const currentClassList = store.deviceOptions(currentDevice);
	const replaceClassList = store.deviceOptions(replaceDevice);

	// update DOM accordingly
	devices.forEach((device) => {
		const isCurrentDevice = device.classList.contains(replaceClassList[1]);
		const hasActiveFrame = store.getFrame();

		if (isCurrentDevice) {
			device.style.display = "block";
			hasActiveFrame && device.classList.add("active");
		} else {
			device.classList.remove("active");
			device.style.display = "none";
		}
	});

	// toggle classes
	device.classList.replace(currentClassList[0], replaceClassList[0]);
	iframe.classList.replace(currentClassList[2], replaceClassList[2]);

	// set store and call side effects
	store.setDevice(replaceDevice);
	transition();
	scrollToTop();
}

export default handleDevice;