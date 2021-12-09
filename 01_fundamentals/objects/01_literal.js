const myObject = {
  a: 'name',
  b: 'test',
  123: 'c',
  1: 'd',
};

myObject[1];
myObject[a];
myObject.a;

// Spot the bug
// The bug above is on `line 9` where we attempt to reference a property of
// `myObject`. However, using the bracket notation we would need to put quotes
// around `a` in order for it to be interpretted as a property name. As it is
// currently, JavaScript will look for a variable named `a` and try to get its
// value to use as the property name. Since there is not variable `a` in scope
// at this time, it will raise an error: `a is not defined`.
//
//
// LS Explanation:
// To access the value of a property using bracket notation (e.g.,
// object[someKey]), the operand inside the brackets that references the
// property name (key) must be a string value. If the operand is a number,
// JavaScript converts it to a string using the Number.prototype.toString()
// method. If the operand is a variable, JavaScript looks up the value
// (converting it to a string if necessary), then uses it as a key to get the
// corresponding property value. The expression myObject[a] raises a
// ReferenceError because JavaScript cannot find the value of the variable a,
// since it has not been declared.

