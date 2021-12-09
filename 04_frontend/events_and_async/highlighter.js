function highlight(element) {
  const highlights = document.querySelectorAll('.highlight');
  highlights.forEach(elem => elem.classList.remove('highlight'));
  element.classList.add('highlight');
}

document.addEventListener('click', event => {
  const clicked = event.target;
  const toHighlight = document.querySelector(clicked.getAttribute('href')) ||
    clicked.closest('article') || document.querySelector('main');
  highlight(toHighlight);
});
