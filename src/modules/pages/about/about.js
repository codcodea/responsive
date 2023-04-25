import { Double, Form } from "../../index.js";
import { getDB, store } from "../../../util/index.js";

import cssText from 'bundle-text:./index.css';

class About extends HTMLElement {

	constructor(variant) {
		super();
		this.variant = variant;
		this.skin = store?.website || variant;
	}

	static get observedAttributes() {
		return ["variant"];
	}

	attributeChangedCallback(name, oldValue, newValue) {
		this[name] = newValue;
	}

	async connectedCallback() {
		if (this.isCashed) return;

		const db = getDB(store.website);
		const shadow = this.attachShadow({ mode: "open" });

		const double = this.createDouble(db);
		const image = this.createImage(db);
		const form = this.createForm();


		const style = document.createElement('style');
		style.textContent = cssText;

		const skinText = await this.loadSkin(this.skin);
		let skin = document.createElement('style');
		skin.textContent = skinText;

		shadow.append(double, image, form, style, skin);
	}

	createDouble(db) {
		const double = new Double();
		double.setAttribute("variant", "variant-text");
		double.setAttribute("head", db[this.variant].head);
		double.setAttribute("body", db[this.variant].body);

		const section = document.createElement("section");
		section.appendChild(double);

		return section;
	}

	createImage(db) {
		const section = document.createElement("section");
		const img = document.createElement("img");
		img.setAttribute("src", db[this.variant].src[0]);
		section.appendChild(img);
		return section;
	}

	createForm() {
		if (this.variant !== "about") return document.createElement("section");
		const section = document.createElement("section");
		const form = new Form();
		section.appendChild(form);
		return section;
	}

	async loadSkin(skin) {
		switch (skin) {
			case 'frost':
				return await import('bundle-text:./skin/frost.css')
			case 'magazine':
				return await import('bundle-text:./skin/magazine.css')
			case 'java':
				return await import('bundle-text:./skin/java.css')
			case 'guitars':
				return await import('bundle-text:./skin/guitars.css')
			default:
				console.log("Class skin: We are out of skins")
		}
	}

	disconnectedCallback() {
		this.isCashed = true;
	}

	render() {
		const root = document.querySelector("#root");
		root.replaceChildren(this);
		return customElements.whenDefined("my-about");
	}
}

customElements.define("my-about", About);

export default About;
