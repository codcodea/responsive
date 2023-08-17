
// import '../frost/index.html';
// import '../magazine/index.html';
// import '.../public/java/index.html';
// import '../guitars/index.html';
// import '../wireframe/index.html';

import initApp from "./src/initApp.js";

const device = document.querySelector("#device-section");

const main = document.querySelector("main");


const interpolation = (baseScale, containerHeight) => {

    const min = 0.2 * baseScale;
    const max = 1.1 * baseScale;

    const minH = 0;
    const maxH = 900;

    const scale = (containerHeight - minH) * (max - min) / (maxH - minH) + min;
    return scale;
}

const resize = (e) => {
    let h = e[0].contentRect.height;

    const scale = interpolation(0.6, h);
    const style = device.style;
    style.setProperty('transform', `scale(${scale}) translate(-50%, -50%)`)
}


const observer = new ResizeObserver(resize);
observer.observe(main);





// initialize onload 
document.addEventListener("DOMContentLoaded", initApp);
