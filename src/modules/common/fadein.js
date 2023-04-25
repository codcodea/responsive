
// handle fade-in effect
async function fadeIn(elements = []) {
  const promises = elements.map((element) => customElements.whenDefined(element));
  return await Promise.allSettled(promises);
}

export default fadeIn;


// For documentation:
// FLUO (Flash of Unstyled Content) is a problem that occurs when the browser renders the page before the custom elements are defined.
// This is a known problem when working with web components.
// The solution is to wait for the custom elements to be defined before appending them to the DOM.

// Mozilla: https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#using_custom_elements_in_html
// Google solution: https://developers.google.com/web/fundamentals/web-components/customelements#jsapi
// This solution: https://www.abeautifulsite.net/posts/flash-of-undefined-custom-elements/


