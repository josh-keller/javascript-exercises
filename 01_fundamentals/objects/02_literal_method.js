// In the following code, a user creates a person object literal and defines two
// methods for returning the person's first and last names. What is the result
// when the user tries out the code on the last line?

const person = {
  firstName() {
    return 'Victor';
  },
  lastName() {
    return 'Reyes';
  },
};

console.log(`${person.firstName} ${person.lastName}`);

// This will log:
// ```firstName() {
//      return 'Victor';
//    } lastName() {
//        return 'Reyes';
//    }
//  ```
// This is because we are referencing the properties `firstName` and `lastName` but
// not appening `()` to actually call the functions. JavaScript will convert the
// functions to strings which result in the above output of the actual functions
// themselves. If we wanted to see the return value of calling a function, we
// would need to write `${person.firstName()} ${person.lastName()}` which would
// log `Victor Reyes`.
