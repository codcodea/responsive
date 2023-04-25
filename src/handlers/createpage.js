
/* 
  This function creates a new page or subpage.
*/

function createPage(page) {
	
	let elem;
	const isPage = isNaN(page); 

	if (isPage) { // page
		elem = document.createElement("my-about");
		elem.setAttribute("variant", page);
	} else { // subpage
		elem = document.createElement("my-page");
		elem.setAttribute("page", page);
	}
	return elem;
}

export default createPage;
