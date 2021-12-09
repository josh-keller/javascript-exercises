const array = ['Apples', 'Peaches', 'Grapes'];

array[3.4] = 'Oranges';
console.log(array.length);  // 3
console.log(Object.keys(array).length); // 4

array[-2] = 'Watermelon';
console.log(array.length);  // 3
console.log(Object.keys(array).length);  // 5

// The `length` property of an array is one greater than the highest
// non-negative integer key. In this case, although we are adding additional
// keys to the array object, neither of them are non-negative integers. This
// means that they are not considered elements of the array and do not
// contribute to the array's length. They are, however, considered keys in the
// object, which means that when we call `Object.keys(array)` it will return an
// array that includes both the "array" keys (i.e. non-negative integers) and
// the other object keys (in this case `3.4` and `-2`).
//
/


