
import initApp from "../handlers/initapp.js";
import setPage from "../handlers/setpage.js";
import { store } from "../util/index.js";

// Init store with the current website template
const website = "magazine";
store.setWebsite(website);

// History API
window.onpopstate = (e) => {
  e.preventDefault();
  if (e.state == null || !e.state.page) return;
  setPage(e.state.page);
};

// Init app
document.addEventListener("DOMContentLoaded", () => initApp());

