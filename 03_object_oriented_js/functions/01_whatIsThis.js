const person = {
  firstName: 'Rick ',
  lastName: 'Sanchez',
  fullName: this.firstName + this.lastName,
};

console.log(person.fullName);

// Here I'm not sure whether there is an error or `undefined undefined`. When
// `fullName` is defined within the object literal, the object `person` has not
// yet been created. Thus, `this` cannot refer to person. Instead, I believe it
// refers to the global object (or whatever the context is in the enclosing
// scope). Since `firstName` and `lastName` are not defined on that object,
// `thie.firstName` and `this.lastName` will return `undefined`, which is coerced
// into a number because of the `+` operator having two non-string operands.
// This results in the expression `NaN + NaN` being assigned to the `fullName`
// property.
