const myObject = {
  prop1: '123',
  prop2: '234',
  'prop 3': '345',
};

const prop2 = '456';
myObject['prop2'] = '456';
myObject[prop2] = '678';

console.log(myObject[prop2]);  // '678' <- prop2 is a const that stores '456'. Line 9 creates a property on myObject that stores the value '678'
console.log(myObject.prop2);   // '456' <- here prop2 is interpreted as a string. this is equivalent to myObject['prop2']. On line 8 we reassigned this to '456'

const myObj = {};
myObj[myFunc()] = 'hello, ';

function myFunc() {
  return 'funcProp';
}

console.log(myObj);
myObj[myFunc()] = 'world!';
console.log(myObj);

