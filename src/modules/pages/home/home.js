
import { Hero, Section } from "../../index.js";
import { getDB, store } from "../../../util/index.js";

import cssText from 'bundle-text:./index.css';

class Home extends HTMLElement {
  
	constructor() {
		super();
		this.skin = store?.website || null;
	}

	async connectedCallback() {
		if (this.isCashed) return;

		// Get the database for the current website
		const db = getDB(store.website);

		// Create the shadow root
		const shadow = this.attachShadow({ mode: "open" });

		// Create the hero and pages components
		const hero = this.createHero(db);
		const pages = this.createPages(db);

		// Get the style and skin for the current website

		const style = document.createElement('style');
		style.textContent = cssText;

    const skinText = await this.loadSkin(this.skin);
    let skin = document.createElement('style');
    skin.textContent = skinText;

		// Append the components to the shadow root
		shadow.append(hero, pages, style, skin);
	}

	createHero(db) {
		const { head, body } = db.hero;
		const section = document.createElement("section");
		const myHero = new Hero("spa", head, body);
		section.appendChild(myHero);
		return section;
	}

	createPages(db) {
		const section = document.createElement("section");
		section.classList.add("main-section");

		db.page.forEach((page) => {
			const { id, head, subhead, cover } = page;
			const mySection = new Section("spa", id, head, subhead, cover);
			mySection.setAttribute("target", id);
			section.appendChild(mySection);
		});

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
		return customElements.whenDefined("my-home");
	}
}

customElements.define("my-home", Home);

export default Home;
