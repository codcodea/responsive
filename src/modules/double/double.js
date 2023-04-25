import { getTemplate } from "../index.js";
import { store } from "../../util/index.js";

import templateURL from './index.html';
import cssText from 'bundle-text:./index.css';

class Double extends HTMLElement {

	constructor(src, reverse, variant, head, body, skin) {
		super();
		this.src = src || null;
		this.head = head || null;
		this.body = body || null;
		this.reverse = reverse || false;
		this.variant = variant || null;
		this.skin = store?.website|| skin;
	}

	async connectedCallback() {
		if (this.isCashed) return;

		const node 	= await getTemplate(templateURL);

		const style = document.createElement('style');
		style.textContent = cssText;

		const skinText = await this.loadSkin(this.skin);
		let skin = document.createElement('style');
		skin.textContent = skinText;

		this.attachShadow({ mode: "open" }).append(node, style, skin);
		this.setAttributes();
		
	}

	setAttributes() {
		const wrapper = this.shadowRoot.firstElementChild;
		const image = this.shadowRoot.querySelector("[slot='my-image']");
		const head = this.shadowRoot.querySelector("[slot='my-head']");
		const body = this.shadowRoot.querySelector("slot[name='my-body']");

		wrapper.classList.add(this.variant);
		this.reverse ? wrapper.classList.add("reverse") : null;
		// image.src = new URL(this.src, import.meta.url);
		this.head && (head.innerHTML = this.head);
		this.body && (body.innerHTML = this.body);
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

	static get observedAttributes() {
		return ["src", "reverse", "variant", "body", "head", "skin"];
	}

	attributeChangedCallback(name, oldValue, newValue) {
		switch (name) {
			case "reverse":
				this[name] = newValue === "true" || newValue === "" ? true : false;
				break;
			default:
				this[name] = newValue;
		}
	}

	disconnectedCallback() {
		this.isCashed = true;
	}
}

customElements.define("my-double", Double);

export default Double;
