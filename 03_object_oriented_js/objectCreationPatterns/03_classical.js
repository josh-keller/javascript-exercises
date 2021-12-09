function Person(first, last, age, gender) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.gender = gender;
}

Person.prototype.fullName = function() {
  return this.firstName + ' ' + this.lastName;
};

Person.prototype.communicate = function() {
  console.log(`Hello, I'm ${this.fullName()}.`);
};

Person.prototype.eat = function(food = 'to eat') {
  console.log(`Yum, I love ${food}.`);
};

Person.prototype.sleep = function() {
  console.log('Goodnight!');
};


function Doctor(first, last, age, gender, specialization) {
  Person.call(this, first, last, age, gender);
  this.specialization = specialization;
}

Doctor.prototype = Object.create(Person.prototype);
Object.defineProperty(Doctor.prototype, 'constructor', {
  value: Doctor,
  enumerable: false,
  writable: true,
});

Doctor.prototype.diagnose = function() {
  console.log('Diagnosing');
};

function Professor(first, last, age, gender, subject) {
  Person.call(this, first, last, age, gender);
  this.subject = subject;
}

Professor.prototype = Object.create(Person.prototype);
Object.defineProperty(Professor.prototype, 'constructor', {
  value: Professor,
  enumerable: false,
  writable: true,
});

Professor.prototype.teach = function() {
  console.log('Teaching');
};

function Student(first, last, age, gender, degree) {
  Person.call(this, first, last, age, gender);
  this.degree = degree;
}

Student.prototype = Object.create(Person.prototype);
Object.defineProperty(Student.prototype, 'constructor', {
  value: Student,
  enumerable: false,
  writable: true,
});

Student.prototype.study = function() {
  console.log('Studying');
};

function GraduateStudent(first, last, age, gender, degree, graduateDegree) {
  Student.call(this, first, last, age, gender, degree);
  this.graduateDegree = graduateDegree;
}

GraduateStudent.prototype = Object.create(Student.prototype);
Object.defineProperty(GraduateStudent.prototype, 'constructor', {
  value: GraduateStudent,
  enumerable: false,
  writable: true,
});

GraduateStudent.prototype.research = function() {
  console.log('Researching');
};

const person = new Person('foo', 'bar', 21, 'gender');
console.log(person instanceof Person);     // logs true
person.eat();                              // logs 'Eating'
person.communicate();                      // logs 'Communicating'
person.sleep();                            // logs 'Sleeping'
console.log(person.fullName());            // logs 'foo bar'

const doctor = new Doctor('foo', 'bar', 21, 'gender', 'Pediatrics');
console.log(doctor instanceof Person);     // logs true
console.log(doctor instanceof Doctor);     // logs true
doctor.eat();                              // logs 'Eating'
doctor.communicate();                      // logs 'Communicating'
doctor.sleep();                            // logs 'Sleeping'
console.log(doctor.fullName());            // logs 'foo bar'
doctor.diagnose();                         // logs 'Diagnosing'

const graduateStudent = new GraduateStudent('foo', 'bar', 21, 'gender', 'BS Industrial Engineering', 'MS Industrial Engineering');
// logs true for next three statements
console.log(graduateStudent instanceof Person);
console.log(graduateStudent instanceof Student);
console.log(graduateStudent instanceof GraduateStudent);
graduateStudent.eat();                     // logs 'Eating'
graduateStudent.communicate();             // logs 'Communicating'
graduateStudent.sleep();                   // logs 'Sleeping'
console.log(graduateStudent.fullName());   // logs 'foo bar'
graduateStudent.study();                   // logs 'Studying'
graduateStudent.research();                // logs 'Researching'
