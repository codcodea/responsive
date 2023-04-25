
/* 
	This handler is responsible for toggling content / websites.
		- get and set state to store
		- update DOM accordingly
		- call side effects
*/

import store from "./store.js";
import { openWindow, transition } from "./effects.js";

const iframe = document.querySelector("iframe");

function handleContent(e) {
	e.preventDefault();

	// get theme from button id
	const theme = e.currentTarget.id;

	// open website to a new window
	if (theme === "open") return openWindow(store.getContentPath());

	// store state and call side effects
	store.setTheme(theme);
  iframe.src = store.getContentPath(); // order matters
	transition();
}

export default handleContent;