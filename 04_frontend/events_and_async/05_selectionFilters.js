const CLASSIFICATIONS = {
  'Classifications': [ 'Animals', 'Bear', 'Turtle', 'Whale', 'Salmon', 'Ostrich' ],
  'Vertebrate': [ 'Bear', 'Turtle', 'Whale', 'Salmon', 'Ostrich' ],
  'Warm-blooded': ['Bear', 'Whale', 'Ostrich'],
  'Cold-blooded': ['Salmon', 'Turtle'],
  'Mammal': ['Bear', 'Whale'],
  'Bird': ['Ostrich'],
}

const ANIMALS = {
  'Animals': ['Classifications', 'Vertebrate', 'Warm-blooded', 'Cold-blooded', 'Mammal', 'Bird' ],
  'Bear': ['Vertebrate', 'Warm-blooded', 'Mammal'],
  'Turtle': ['Vertebrate', 'Cold-blooded'],
  'Whale': ['Vertebrate', 'Warm-blooded', 'Mammal'],
  'Salmon': ['Vertebrate', 'Cold-blooded'],
  'Ostrich': ['Vertebrate', 'Warm-blooded', 'Bird'],
}

function filterSelectionList(selectElement, valuesToShow) {
  let selected = false;

  Array.prototype.forEach.call(selectElement.children, option => {
    option.hidden = !(valuesToShow.includes(option.value));
    option.selected = false;
    if (!selected && !option.hidden) {
      option.selected = true;
      selected = true;
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const classificationsList = document.getElementById('animal-classifications');
  const animalsList = document.getElementById('animals');
  const clearBtn = document.getElementById('clear');

  classificationsList.addEventListener('input', event => {
    const filterOpt = event.target.value;

    filterSelectionList(animalsList, CLASSIFICATIONS[filterOpt]);
  });

  animalsList.addEventListener('input', event => {
    const animal = event.target.value;

    filterSelectionList(classificationsList, ANIMALS[animal]);
  });

  document.getElementById('clear').addEventListener('click', event => {
    event.preventDefault();

    filterSelectionList(classificationsList, ANIMALS['Animals']);
    filterSelectionList(animalsList, CLASSIFICATIONS['Classifications']);
  });
});


