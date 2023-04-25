
// A simple store and state management class

import setPage from "../handlers/setpage.js";
import { getDB } from "./index.js";

class Store {
	constructor() {
		this._navLinks = [];
	}

	get adress () {
		return this._adress;
	}

	get email () {
		return this._email;
	}

	get phone () {
		return this._phone;
	}

	get social () {
		return this._social;
	}

	get page() {
		return this._page;
	}
	set page(page) {
		if(this._page == page) return;
		this._page = page;
		setPage(page);
	}

	get logo() {
		return this._logo;
	}

	set logo(logo) {
		this._logo = logo;
	}

	set navLinks(navLinks) {
		this._navLinks = navLinks;
		this._page = navLinks[0];
	}

	get path() {
		return "/" + this._page;
	}

	get website() {
		return this._website;
	}

	get navLinks() {
		return this._navLinks;
	}

	get navButton() {
		return this._navButton;
	}
	
	setWebsite(website) {
		this._website = website;
		
		const db = getDB(website);

		const { logo, navLinks, navButton } = db.toolbar;
		const { adress, email, phone, social } = db.footer;

		this._logo = logo;
		this._navLinks = navLinks;
		this._navButton = navButton;
		this._page = navLinks[0];
		this._adress = adress;
		this._email = email;
		this._phone = phone;
		this._social = social;
	}
}

const store = new Store();

export default store;
