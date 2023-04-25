
/* 

  Here we define a Section-component using the Web Components API.
  There are two ways to initialize this component:

  1. With the new-keyword  
    
    const mySection = new Section (...args)

  2. With a custom html-element using attributes 
  
    <my-section src="src" reverse="reverse" variant="variant" head="head" body="body">
    </my-section>

  This project uses both approaches:
    * the first for single-page-applications (SPA) serving content from a database
    * the second when constructing static pages using inline html-code.
  
  Web Components API: https://developer.mozilla.org/en-US/docs/Web/Web_Components
    
*/
import { Button, getTemplate, handleIntersection, observerOptions } from "../index.js";
import { store } from "../../util/index.js";

import templateUrl from "./index.html";
import cssText from 'bundle-text:./index.css';

class Section extends HTMLElement {
	
	/* 
    An instance of the IntersectionObserver is attached to the component. 
    It will handle visual effects when the component intersect with the viewport
  */

	static observer = new IntersectionObserver(handleIntersection, observerOptions);

	/* 
    This method is part of the Web Components API. 
    It defines which attributes that should be observed: 

    <my-section image="image" variant="variant" target="target">
    </my-section>
  */

	static get observedAttributes() {
		return ["image", "variant", "target"];
	}

	/*
    The constructor arguments is used when the component is initialized using the 
    new-keyword. 

    const mySection = new Section(...args);
  */

	constructor(variant, id, head, subhead, cover) {
		super();
		this.variant = variant;
		this.id = id;
		this.head = head;
		this.subhead = subhead;
		this.image = cover;
		this.skin = store?.website || variant;
	}

	/*
    This method is part of the Web Components API.
    It is called when an attribute is changed.
    Here we just pass new values to the corresponding property.
  */

	attributeChangedCallback(name, oldValue, newValue) {
		this[name] = newValue;
	}

	/*
    This method is part of the Web Components API.
    It is called when the component is first added to the DOM.
  */

	async connectedCallback() {
		// if the component is already cached, return
		if (this.isCached) return;

		const node 	= await getTemplate(templateUrl);
		// const style = getStyle(csss);
		// const skin 	= getSkin(csss);

		/* 
      Create and attach a new shadow DOM to the component.
      The mode "open" is chosen to make sure the shadow DOM is accessible 
      from the outside with javascript.
    */

		const shadow = this.attachShadow({ mode: "open" });

		/* 
      Attaching the html-template and stylesheets to the shadow DOM to ensure encapsulation. 
      I.e to make sure the styles are not affected by other stylesheets on the page.
    */

		const style = document.createElement('style');
		style.textContent = cssText;

    const skinText = await this.loadSkin(this.skin);
    let skin = document.createElement('style');
    skin.textContent = skinText;

		shadow.append(node, style, skin);

		this.setAttributes();
		this.observe();
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

	/* 
    This method is part of the Web Components API.
    It is called when the component is removed from the DOM
  */
 
	disconnectedCallback() {
		// set the isCached property to true to avoid re-creating on re-mount
		this.isCached = true;
	}

	// This method forwards attributes and props to the DOM
	setAttributes() {

		const shadow = this.shadowRoot;

		if (this.variant !== "spa") {
			console.log(this.image);
			let img = document.createElement('img');
			img.src = this.image;
			//shadow.getElementById("image").setAttribute("src", this.image);
		}
		
		let img = document.createElement('img');
		img.src = this.image;

		shadow.querySelector("#image").src = this.image;
		shadow.querySelector("slot[name='my-head']").textContent = this.head;
		shadow.querySelector("slot[name='my-body']").textContent = this.subhead;

		const button = new Button("spa", "click here", this.id);
		shadow.querySelector(".section-text-button").appendChild(button);

	}

	// This method adds event listeners and observers to the component
	observe() {
		this.shadowRoot.addEventListener("click", () => store.page = this.target);
		Section.observer.observe(this.shadowRoot.children[0]);
	}
}

/* 
  At last, we register the component in the browser. 
  We can now use <my-section></my-section> in html files
*/

customElements.define("my-section", Section);

/*
  We also export the component, to be used within other components, 
  and/or initialized with the new-keyword. 
*/

export default Section;
