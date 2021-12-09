// Function.prototype.bind is a method on all function objects that allows us to
// hard-bind a function to a particular object. The way this works is that you
// pass a context object to the bind method and it returns a new function that
// is essentially the same function but hard-bound to the context object
// supplied.

// Create a function myBind, that accepts two arguments: 1) The function to
// bind, 2) The context object, and returns a new function that's hard-bound to
// the passed in context object.

function myBind(func, context, ...outerArgs) {
  return function(...innerArgs) {
    return func.apply(context, outerArgs.concat(innerArgs));
  };
}

a = 'global';

let obj1 = {
  a: 1,
};

let obj2 = {
  a: 2,
};

function printA() {
  console.log(this.a);
  for (let i = 0; i < arguments.length; i += 1) {
    console.log(arguments[i]);
  }
}

printA();
printA.call(obj1);
printA.call(obj2);

console.log("----------------");
let printA1 = myBind(printA, obj1);
printA1(2, 3, 4);
console.log("----------------");
printA1.call(obj2, 5, 6, 7);
console.log("----------------");

printAWithHeader = myBind(printA, obj1, "Header");
printAWithHeader();
printAWithHeader(2, 3);

console.log("----------------");
function addNumbers(a, b) {
  return a + b;
}

const addFive = myBind(addNumbers, null, 5);

console.log(addFive(10)); // 15
