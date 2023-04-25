

import fadeIn from "./common/fadein.js";
import { handleIntersection, observerOptions } from "./common/observer.js";
import getStyle, { getSkin } from "./common/getStyles.js";
import getTemplate from "./common/getTemplate.js";

import Button from "./button/button.js";
import Toolbar from "./toolbar/toolbar.js";
import HeroButton from "./hero-button/hero-button.js";
import Footer from "./footer/footer.js";
import Double from "./double/double.js";
import Form from "./form/form.js";

const elements = [
	"my-button",
	"my-toolbar",
	"my-hero-button",
	"my-footer",
	"my-double",
	"my-form",
];

export {
  Button,
  Toolbar,
  HeroButton,
  Footer,
  Double,
  Form,
  fadeIn,
  handleIntersection,
  observerOptions,
  elements,

  getStyle,
  getSkin,
  getTemplate,
};
