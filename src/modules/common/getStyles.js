
async function getStyle(url) {

	const css = document.createElement("link");
	css.setAttribute("rel", "stylesheet");
	css.setAttribute("href", url.href);

	return css;
}

// create a link-element with the user specific css-file ("the skin")
export function getSkin(url) {
		
	const css = document.createElement("link");
	css.setAttribute("rel", "stylesheet");
	css.setAttribute("href", url.pathname);

	return css;
}

export default getStyle;
