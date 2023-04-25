
/* 
	Handers for side effects that happen when a page is loaded
*/

import { cache, store } from "../util/index.js";

const historyAPI = (page) => window.history.pushState({ page }, "");
const scrollToTop = () => window.scrollTo(0, 0, "smooth");
const fadeOut = (root) => root.classList.remove("loaded");

const fadeInWhenLoaded = (root) => {
	// timeout to avoid visual FOUC
	setTimeout(() => {root.classList.add("loaded");}, 50);
};

function sideEffects(page, elem) {
	elem && cache.set(page, elem); // cache the element
	store.page = page; // set current page in store
	historyAPI(page); // update history API
	scrollToTop(); // scroll to top
}

export { sideEffects, fadeOut, fadeInWhenLoaded };
