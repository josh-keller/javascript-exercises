function Person(firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
}

Person.prototype.fullName = function() {
  return `${this.firstName} ${this.lastName}`;
};

Person.prototype.communicate = function() {
  console.log('Communicating');
};

Person.prototype.eat = function() {
  console.log('Eating');
};

Person.prototype.sleep = function() {
  console.log('Sleeping');
};

function Doctor(firstName, lastName, age, gender, specialization) {
  Person.call(this, firstName, lastName, age, gender);
  this.specialization = specialization;
}

Doctor.prototype = Object.create(Person.prototype);

Object.defineProperty(Doctor.prototype, 'constructor', {
  enumerable: false,
  writable: true,
  configurable: true,
  value: Doctor,
});

let bob = (new Doctor('bob', 'rhodes', 65, 'male', 'JavaScript'));
console.log(bob.constructor);

Doctor.prototype.diagnose = function() {
  console.log('Diagnosing');
};
