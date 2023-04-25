import createPage from "./createpage.js";
import { cache, store } from "../util/index.js";
import { sideEffects, fadeOut, fadeInWhenLoaded } from "./fx.js";

import { elements, fadeIn } from "../modules/index.js";

// DOM
const root = document.querySelector("#root");
const footer = document.querySelector("#footer");

/* 
	This function is called when a new page is requested
		- check if page is already in cache, if not
		- call createPage() to create the new page
		- call side effects
*/

const setPage = (page) => {
	// if click on logo or projects, render home page
	if (page === store.logo || page === "projects") page = "home";

	fadeOut(root);

	// check and render if page already exsists in cache
	if (cache.has(page)) {
		cache
			.get(page)
			.render()
			.then(() => fadeInWhenLoaded(root));
		sideEffects(page);
		return;
	}

	// if not in cache create, render and cache the new page
	const elem = createPage(page);
	elem.render().then(() => {
		fadeInWhenLoaded(root);
		sideEffects(page, elem);
	});
};

export default setPage;
