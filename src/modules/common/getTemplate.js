async function getTemplate(templateURL) {

	return await fetch(templateURL)
	.then((response) => response.text())
	.then((templateString) => {
		const parser = new DOMParser(); // parse text to html
		const doc = parser.parseFromString(templateString, "text/html");
		return doc.head.firstChild.content.cloneNode(true);
	});


	// console.log(document);


	// const path = url.pathname.split("/").slice(-2).join("/");	

	// const urld = new URL(path, import.meta.url);

	// try {
	// 	const res = await fetch(urld);
	// 	const data = await res.text();
	// 	// console.log("path", urld);
	// 	// console.log("data", res);
	// 	// console.log("data", data);

	// 	const parser = new DOMParser(); // parse text to html
	// 	const doc = parser.parseFromString(data, "text/html");
	
	// 	// returns a deep-clone to make sure that the template itself is not altered or compromised
	// 	return doc.head.firstChild.content.cloneNode(true);
		
	// } catch(error) {
	// 	console.log(error);
	// }
	













}

export default getTemplate;
