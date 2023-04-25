async function getTemplate(templateURL) {
	return await fetch(templateURL)
	.then((response) => response.text())
	.then((templateString) => {
		const parser = new DOMParser(); // parse text to html
		const doc = parser.parseFromString(templateString, "text/html");
		return doc.head.firstChild.content.cloneNode(true);
	});
}

export default getTemplate;
