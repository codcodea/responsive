import { Button, getTemplate } from "../index.js";
import { store } from "../../util/index.js";

import templateURL from './index.html';
import cssText from 'bundle-text:./index.css';

class Toolbar extends HTMLElement {

	constructor(variant, skin) {
		super();
		this.variant = variant;
		this.logo = store?.logo;
		this.navLinks = store?.navLinks;
		this.navButton = store?.navButton;
		this.skin = store?.website || skin;
	}

	static get observedAttributes() {
		return ["variant", "skin"];
	}

	attributeChangedCallback(name, oldValue, newValue) {
		this[name] = newValue;
	}

	async connectedCallback() {

		const shadow = this.attachShadow({ mode: "open" });

		const node = await getTemplate(templateURL);

		const style = document.createElement('style');
		style.textContent = cssText;

		const skinText = await this.loadSkin(this.skin);
		let skin = document.createElement('style');
		skin.textContent = skinText;

		shadow.append(node, style, skin);
		this.observe();
	}

	observe() {
		if (this.variant === "spa") {
			this.setAttributes();
			this.shadowRoot.querySelectorAll("a").forEach((link) => link.addEventListener("click", this.handleClick));
		} else {

			// setting links for non-spa please refactor
			const slots = this.shadowRoot.querySelectorAll("slot");
			document.querySelectorAll("[data-href]").forEach((link) => {

				const href = link.dataset.href
				const currentSlot = link.slot;

				slots.forEach((slot) => {
					if (slot.name == currentSlot) {
						slot.parentElement.href = href;
					}
				})
			})
		}
	}

	setAttributes() {
		const shadow = this.shadowRoot;
		shadow.firstElementChild.classList.add(this.variant); // add variant class
		shadow.querySelector("#logo").innerHTML = this.logo; // set logo
		shadow.querySelectorAll("li").forEach((child) => child.remove()); // clear nav template

		this.navLinks.forEach((link) => { // set nav links
			const li = document.createElement("li");
			const a = document.createElement("a");
			a.textContent = link;
			li.appendChild(a);
			shadow.querySelector("ul").appendChild(li);
		});

		// create and append a button
		const button = new Button("spa", this.navButton, this.navLinks[1], this.skin);
		shadow.querySelector(".button-container").appendChild(button);
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
		this.shadowRoot.querySelector("#logo").removeEventListener("click", this.handleClick);
	}

	handleClick(e) {
		e.preventDefault();
		store.page = e.target.innerHTML;
	}

	render() {
		const header = document.querySelector("header");
		header.replaceChildren(this);
		return customElements.whenDefined("my-toolbar");
	}
}

customElements.define("my-toolbar", Toolbar);

export default Toolbar;



