
In this folder, the library of web components is stored. 

All inline comments for "/modules" are written under the "/modules/section" component 
as they all follow the same general pattern. 

Some methods are integral parts of the Web Components API. I will use all parts 
of the API, that is:

1. Custom Elements
2. Shadow DOM
3. HTML templates and slots

https://developer.mozilla.org/en-US/docs/Web/Web_Components

Another objective was to find a way to separate concerns, that is, 
to isolate component specific logic HTML, CSS and JavaScript into 
reusable and organized chunks. 

Validation comments: 

HTML validator https://validator.w3.org/
  I am ignoring the following errors
    - html fragment <template> files with no head, doctype and encoding ignored 
    as validator expects full HTML-document (but it is not)