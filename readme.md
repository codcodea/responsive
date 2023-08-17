# Responsive web component library
This is a responsive web component library using Web Components API. The project aims to explore and evaluate how native web technologies compare to popular front-end frameworks like React.js, Angular.js, and Vue.js.

## Web technologies
* HTML, CSS och JavaScript, no external libraries used
* Web Components API, shadow DOM and HTML templates
* Learn more: https://developer.mozilla.org/en-US/docs/Web/API/Web_components

## Guiding principles
* Components can be used inline, i.e `<my-component props={...args} />` 
* Components can render on request, i.e `new MyComponent(...args)`
* Component integrate with database, cache and state management

### Examples use
Umbrella website with examples of components use on different viewports. 
web.webben.dev

## Folder structure 

### Web components / modules
Reusable modules are found under src/modules, e.g toolbar, footer and image-grids.

### src/
/devices - the umbrella website </br>
/frost - the Frost website </br>
/magazine - the Magazine website </br>
./public/java - the Riders Cafe website </br>
/guitars - the vintage guitar website </br>
/wireframe - display of web components </br>

### dist/ 
Production build live at web.webben.dev

## Getting Started
- npm init
- npm run build
- npm start