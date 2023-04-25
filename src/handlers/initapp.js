
import { store, cache } from "../util/index.js";
import { Toolbar, Home, Footer, fadeIn, elements } from "../modules/index.js";

// DOM
const container = document.querySelector(".container");
const root = document.querySelector("#root");

/* 
  At initialization we fetch data for the current website from the database.
  Then we create a toolbar, a footer and a home page. They are cached for later use. 
*/

async function initApp() {

  store.page = "home";

  // create toolbar
  const toolbar = new Toolbar("spa");
  toolbar.render();

  // create home page
  const home = new Home();
  home.render()

  // create footer
  const footer = new Footer("spa");
  footer.render();

  // cache the elements
  cache.set("home", home);
  cache.set("toolbar", toolbar);
  cache.set("footer", footer);

  // set History API
  window.history.pushState({ page: store.page}, "");

  // fade in the page
  fadeIn(elements).then(() => {
    root.classList.add("loaded");    
    container.classList.add("loaded")
    // footerDom.classList.add("loaded"); 
  });

  return true;
}

export default initApp;
