// this is gonna be a test field for nodes and js

//children and childNodes
let children = document.body.children;
console.log(children);
let childnodes = document.body.childNodes;
console.log(childnodes);
console.log(childnodes.length);

//querrySelector - finds the first element that matches the selector
const findArticles = document.querySelector("main header");
console.log(findArticles);

//querrySelectorAll - gives back all elements that match the selector
const findAllArticles = document.querySelectorAll("header");
console.log(findAllArticles);

//be sure to test if the element exists
const testError = document.querySelector("yolo");
if (testError === null) {
  console.warn("Can't find element!");
}

//.addEventListener(event, callback) - uses by default the bubble phase of the propagation phases
const clickListener = document.querySelector(".plant-tile");
clickListener.addEventListener("click", function (event) {
  console.log(event.target); //accessing the event object
  console.log(event.phase);
  console.log("There was a click!");
  event.stopPropagation(); //this stops the propagation, sometimes useful to stop click events for example
});
