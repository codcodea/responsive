
// handlers
import getTemplate from "./common/getTemplate.js";
import getStyle, { getSkin } from "./common/getStyles.js";
import fadeIn from "./common/fadein.js";
import { handleIntersection, observerOptions } from "./common/observer.js";
import elements from "./common/elements.js";

// pages
import About from "./pages/about/about.js";
import Home from "./pages/home/home.js";
import Page from "./pages/projects/page.js";

// components
import Button from "./button/button.js";
import Toolbar from "./toolbar/toolbar.js";
import HeroButton from "./hero-button/hero-button.js";
import Hero from "./hero/hero.js";
import Section from "./section/section.js";
import Footer from "./footer/footer.js";
import Double from "./double/double.js";
import Form from "./form/form.js";
import ImageGrid from "./imagegrid/imagegrid.js";

export {
	About,
	Home,
	Button,
	Toolbar,
	HeroButton,
	Hero,
	Section,
	Footer,
	Double,
	ImageGrid,
	Page,
	Form,
	fadeIn,
	handleIntersection,
	observerOptions,
	getTemplate,
	getStyle,
	getSkin,
	elements
};
