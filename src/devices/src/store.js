
// Simple store for state management
class Store {

  classList = {
    mobile: ["mobile", "mobile-device", "mobile-iframe"],
    tablet: ["tablet", "tablet-device", "tablet-iframe"],
    laptop: ["laptop", "laptop-device", "laptop-iframe"],
    desktop: ["desktop", "desktop-device", "desktop-iframe"]
  }

  contentPath = {
    frost: "../../frost/index.html",
    magazine: "../../magazine/index.html",
    java: "../../java/index.html",
    guitars:  "../../guitars/index.html",
    // frost: new URL("../../frost/index.html"  ,import.meta.url).href,
    // magazine: new URL("../../magazine/index.html"  ,import.meta.url).href,
    // java: new URL("../../java/index.html"  ,import.meta.url).href,
    // guitars:  new URL("../../guitars/index.html"  ,import.meta.url).href,
    open: "",
  };

  constructor() {
    this.device = "mobile";
    this.theme = "frost"
    this.hasFrame = true;
  }

  getDevice() {
    return this.device;
  }

  setDevice(device) {
    return this.device = device;
  }

  getTheme() {
    return this.theme;
  }

  setTheme(theme) {
    return this.theme = theme;
  }
  
  getFrame() {
    return this.hasFrame;
  }

  toggleFrame() {
    return this.hasFrame = !this.hasFrame;
  }

  deviceOptions(device) {
    return this.classList[device];
  }

  getContentPath() {
    return this.contentPath[this.theme];
  }

  getCurrentDeviceClass() {
    return this.classList[this.device][1];
  }
}

const store = new Store();

export default store;