import { getTemplate } from "../index.js";
import { store } from "../../util/index.js";

import templateUrl from "./index.html";
import cssText from 'bundle-text:./index.css';

class Footer extends HTMLElement {

	constructor(variant, skin) {
		super();
		this.variant = variant;
		this.logo = store.logo;
		this.adress = store.adress;
		this.email = store.email;
		this.phone = store.phone;
		this.social = store.social;
		this.skin = store?.website || skin;
	}

	static get observedAttributes() {
		return ["variant", "skin"];
	}

	attributeChangedCallback(name, oldValue, newValue) {
		this[name] = newValue;
	}

	async connectedCallback() {

		const node = await getTemplate(templateUrl);

		let style = document.createElement('style');
		style.textContent = cssText;

		const skinText = await this.loadSkin(this.skin);
		let skin = document.createElement('style');
		skin.textContent = skinText;

		this.attachShadow({ mode: "open" }).append(node, style, skin);
		this.setAttributes();
	}

	setAttributes() {
		if (this.variant !== "spa") return;

		const shadow = this.shadowRoot;
		shadow.querySelector("slot[name='logo']").innerHTML = this.logo;
		shadow.querySelector("slot[name='adress']").innerHTML = this.adress;
		shadow.querySelector("slot[name='email']").innerHTML = this.email;
		shadow.querySelector("slot[name='phone']").innerHTML = this.phone;
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

	render() {
		const footer = document.querySelector("footer");
		footer.replaceChildren(this);
		return customElements.whenDefined("my-footer");
	}
}

customElements.define("my-footer", Footer);

export default Footer;
