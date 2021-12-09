const person = { name: 'Victor' };
const otherPerson = { name: 'Victor' };

console.log(person.name === otherPerson.name);    // false -- expected: true

// This returns false because `person` and `otherPerson` refer to two different
// objects. Using either of the equality operators on objects in JavaScript
// compares whether the variables reference the same object and not whether the
// two objects have the same values.
