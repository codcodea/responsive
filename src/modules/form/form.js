
import { getTemplate } from "../index.js";
import { store } from "../../util/index.js";

import templateUrl from "./index.html";
import cssText from 'bundle-text:./index.css';

class Form extends HTMLElement {

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
		
		const node 	= await getTemplate(templateUrl);
		let style = document.createElement('style');
		style.textContent = cssText;

		const skinText = await this.loadSkin(this.skin);
		let skin = document.createElement('style');
		skin.textContent = skinText;

		this.attachShadow({ mode: "open" }).append(node, style, skin);
		this.init();
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

	init() {
		this.shadowRoot.firstElementChild.classList.add(this.variant);
	}

	disconnectedCallback() {
		this.isCashed = true;
	}
}

customElements.define("my-form", Form);

export default Form;
