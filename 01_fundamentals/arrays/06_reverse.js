// In this exercise, you will implement your own version of the
// Array.prototype.reverse method. Your implementation should differ from the
// built-in method in the following two ways:

 // - It should accept either a string or an array as an argument.
 // - It should return a new string or array.

function reverse(inputForReversal) {
  let isString = (typeof inputForReversal === 'string');
  let workingArray = [];

  if (isString) {
    workingArray = inputForReversal.split('');
  } else {
    workingArray = inputForReversal.slice();
  }

  let length = workingArray.length;
  for (let idx = 0; idx < length / 2; idx += 1) {
    let temp = workingArray[idx];
    workingArray[idx] = workingArray[length - idx - 1];
    workingArray[length - idx - 1] = temp;
  }

  if (isString) {
    return workingArray.join('');
  } else {
    return workingArray;
  }
}

console.log(reverse('Hello'));           // "olleH"
console.log(reverse('a'));               // "a"
console.log(reverse([1, 2, 3, 4]));      // [4, 3, 2, 1]
console.log(reverse([]));                // []

const array = [1, 2, 3];
console.log(reverse(array));             // [3, 2, 1]
console.log(array);                      // [1, 2, 3]
