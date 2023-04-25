
import { getTemplate } from "../index.js";
import { store } from "../../util/index.js";

import templateUrl from "./index.html";
import cssText from 'bundle-text:./index.css';

class ImageGrid extends HTMLElement {

  constructor(src) {
    super();
    this.src = src || null;
    this.skin = store?.website || null;
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
    this.src.forEach(image => {

      const div = document.createElement("div");
      div.classList.add("grid-item-wrapper");

      let img = document.createElement('img');
      img.src = new URL(image, import.meta.url);
      document.body.appendChild(img);

      // const img = document.createElement("img");
      // img.src = image;
      // img.setAttribute("alt", imgName)
      img.classList.add("grid-item");

      div.appendChild(img);
      this.shadowRoot.querySelector(".grid-container").appendChild(div);
    });
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

customElements.define("my-grid", ImageGrid);

export default ImageGrid;