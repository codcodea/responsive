
import initApp from "../handlers/initapp.js";
import setPage from "../handlers/setpage.js";

import { store } from "../util/index.js";

// Set store
store.setWebsite("frost");

// History API
window.onpopstate = (e) => {
  e.preventDefault();
  if (e.state == null) return;
  setPage(e.state.page);
};

// Init app
document.addEventListener("DOMContentLoaded", () => initApp());
