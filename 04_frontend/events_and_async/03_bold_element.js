function makeBold(element) {
  const boldEvent = new CustomEvent('bolded');
  element.style.fontWeight = 'bold';
  element.dispatchEvent(boldEvent);
}

document.addEventListener('DOMContentLoaded', () => {
let sectionElement = document.querySelector('section');

sectionElement.addEventListener('bolded', function(event) {
  event.target.classList.add('highlight');
});

makeBold(sectionElement);


console.log(sectionElement.classList.contains('highlight'));
// true
console.log(sectionElement.style.fontWeight);
// "bold"
});
