
import { Toolbar, HeroButton, Double, Footer, elements } from '../modules/java-exports.js';

const sections = document.querySelectorAll("section");

// Await elements to be defined. 
const promises = elements.map((element) => customElements.whenDefined(element));
Promise.allSettled(promises).then(() => sections.forEach((s) => s.classList.add("loaded")));


