// Write a function that rotates the last n digits of a number. For the
// rotation, rotate by one digit to the left, moving the first digit to the end.


function rotateString(string) {
  if (string.length === 0) return '';

  return string.slice(1).concat(string[0]);
}

function rotateRightmostDigits(number, digitsToRotate) {
  const numString = String(number);
  const firstPart = numString.slice(0, -digitsToRotate);
  const lastPart = rotateString(numString.slice(-digitsToRotate));
  return Number(firstPart + lastPart);
  
}

function maxRotation(number) {
  for (let i = String(number).length; i > 1; i -= 1) {
    number = rotateRightmostDigits(number, i);
  }

  return number;
}

// Take the number 735291 and rotate it by one digit to the left, getting
// 352917. Next, keep the first digit fixed in place and rotate the remaining
// digits to get 329175. Keep the first two digits fixed in place and rotate
// again to get 321759. Keep the first three digits fixed in place and rotate
// again to get 321597. Finally, keep the first four digits fixed in place and
// rotate the final two digits to get 321579. The resulting number is called the
// maximum rotation of the original number.

// Write a function that takes an integer as an argument and returns the maximum
// rotation of that integer. You can (and probably should) use the
// rotateRightmostDigits function from the previous exercise.
//
console.log(maxRotation(735291) == 321579);
console.log(maxRotation(3) == 3);
console.log(maxRotation(35) == 53);
console.log(maxRotation(105) == 15);// -- the leading zero gets dropped);
console.log(maxRotation(8703529146) == 7321609845);
