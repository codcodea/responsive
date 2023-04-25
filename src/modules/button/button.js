
import { getTemplate } from "../index.js";
import { store } from "../../util/index.js";

import templateURL from './index.html';
import cssText from 'bundle-text:./index.css';

class Button extends HTMLElement {

	constructor(variant, text = null, target, skin) {
		super();
		this.variant = variant;
		this.target = target;
		this.text = text;
		this.skin = store?.website || skin;

		this.handleClick = this.handleClick.bind(this);
	}

	static get observedAttributes() {
		return ["variant", "target", "skin"];
	}

	attributeChangedCallback(name, oldValue, newValue) {
		this[name] = newValue;
	}

	async connectedCallback() {
		if (this.isCashed) return;

		const node = await getTemplate(templateURL);

		let style = document.createElement('style');
		style.textContent = cssText;

		const skinText = await this.loadSkin(this.skin);
		let skin = document.createElement('style');
		skin.textContent = skinText;

		this.attachShadow({ mode: "open" }).append(node, style, skin);

		this.setAttributes();
		this.addEventListeners();
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

	setAttributes() {
		if (this.variant !== "spa") return;
		this.shadowRoot.firstElementChild.innerHTML = this.text;
	}

	addEventListeners() {
		this.shadowRoot.firstElementChild.addEventListener("click", this.handleClick);
	}

	handleClick(e) {
		e.preventDefault();
		if (this.variant === "spa") store.page = this.target;
		else window.location.href = this.target;
	}

	disconnectedCallback() {
		this.isCashed = true;
	}
}

customElements.define("my-button", Button);

export default Button;

