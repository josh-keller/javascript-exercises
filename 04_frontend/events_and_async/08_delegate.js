// Implement a function named delegateEvent that delegates events to the
// descendant (inner) elements of a parent element that match a given selector.
// The function takes four arguments: parentElement, selector, eventType, and
// callback. It returns true if it was able to add an event listener and
// undefined if it wasn't. For example, if the parentElement is section and
// selector is p, the function should delegate events of eventType on the p
// element within section to the function callback; consequently, the function
// returns true.

// Assume that all event handlers listen during the bubbling phase.

function delegateEvent(parentElement, selector, eventType, callback) {
  if (!parentElement || !(parentElement instanceof Element)) return undefined;

  parentElement.addEventListener(eventType, event => {
    const activeChildren = Array.from(parentElement.querySelectorAll(selector));
    if (activeChildren.includes(event.target)) {
      callback(event);
    }
  });

  return true;
}




function setUp() {
  window.element1 = document.querySelector('table');
  window.element2 = document.querySelector('main h1');
  window.element3 = document.querySelector('main');

  window.callback = ({target, currentTarget}) => {
    alert(`Target: ${target.tagName}\nCurrent Target: ${currentTarget.tagName}`);
  }; 
}
