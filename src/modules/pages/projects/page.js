import { ImageGrid, Double, fadeIn } from "../../index.js";
import { getDataFromDB, store } from "../../../util/index.js";

class Page extends HTMLElement {

	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}

	static get observedAttributes() {
		return ["page"];
	}

	attributeChangedCallback(name, oldValue, newValue) {
		this.page = newValue;
	}

	connectedCallback() {
		if (this.isCashed) return;
		this.createPage();
	}

	createPage() {
		const website = store.website;
		const dbResult = getDataFromDB(website, this.page);

		const double = new Double();
		double.setAttribute("variant", "variant-text");
		double.setAttribute("head", dbResult.head);
		double.setAttribute("body", dbResult.body);

		const imageGrid = new ImageGrid(dbResult.src);

		this.shadowRoot.append(double, imageGrid);
	}

	disconnectedCallback() {
		this.isCashed = true;
	}

	render() {
		const root = document.querySelector("#root");
		root.replaceChildren(this);
		return fadeIn(["my-page", "my-grid", "my-double"]);
	}
}

customElements.define("my-page", Page);

export default Page;
