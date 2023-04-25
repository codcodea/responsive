
import { getTemplate } from "../index.js";
import { store } from "../../util/index.js";

import templateUrl from "./index.html";
import cssText from 'bundle-text:./index.css';

class HeroButton extends HTMLElement {

  constructor(variant, skin) {
    super();
    this.variant = variant;
    this.skin = store?.website ?? skin;
  }

  static get observedAttributes() {
    return ['variant', "skin"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this[name] = newValue;
  }

  async connectedCallback() {
    const node = await getTemplate(templateUrl);

    const style = document.createElement('style');
    style.textContent = cssText;

    const skinText = await this.loadSkin(this.skin);
    let skin = document.createElement('style');
    skin.textContent = skinText;

    this.attachShadow({ mode: 'open' }).append(node, style, skin);
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
}

customElements.define('my-hero-button', HeroButton);

export default HeroButton;