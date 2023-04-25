
import store from "./store.js";
import handleDevice from "./hDevice.js";
import handleContent from "./hContent.js";
import { toggleFrame, toMobile } from "./effects.js";

// Grabbing DOM elements
const device = document.querySelector("#device-section");
const devices = document.querySelectorAll(".device:is(button):not(#toggle-frame)");
const contents = document.querySelectorAll(".content:is(button)");
const toggle = document.querySelector("#toggle-frame");
const iframe = document.querySelector("iframe");
const container = document.querySelector(".container");

function initApp() {

	// set initial device (mobile)
	const options = store.deviceOptions("mobile");
	device.classList.add(options[0]);
	iframe.classList.add(options[2]);
	container.style.opacity = 1;

	// set initial content
	console.log(store.getContentPath());
	iframe.src = store.getContentPath();

	// add click to the buttons
	toggle.addEventListener("click", toggleFrame); // toggle device visibility ON/OFF
	devices.forEach((b) => b.addEventListener("click", handleDevice));    // device buttons
	contents.forEach((b) => b.addEventListener("click", handleContent));  // content buttons

	// media query for the special case when user resizes the screen manually
	const mediaQuery = window.matchMedia("(max-width: 768px)");
	mediaQuery.addEventListener("change", toMobile);
}

export default initApp;

