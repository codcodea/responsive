import { getTemplate } from "../index.js";
import { store } from "../../util/index.js";

import templateUrl from "./index.html";
import cssText from 'bundle-text:./index.css';

class Hero extends HTMLElement {

  constructor(variant, head, subhead) {
    super();
    this.variant = variant;
    this.head = head;
    this.subhead = subhead;
    this.skin = store?.website || variant;
  }

  async connectedCallback() {
    if (this.isCashed) return;

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
    const shadow = this.shadowRoot;
    const head = shadow.querySelector("slot[name='my-head']");
    const body = shadow.querySelector("slot[name='my-body']");
    head.textContent = this.head;
    body.textContent = this.subhead;
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
}

customElements.define("my-hero", Hero);

export default Hero;
