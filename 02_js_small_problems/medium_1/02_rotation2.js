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


console.log(rotateRightmostDigits(735291, 1) == 735291);
console.log(rotateRightmostDigits(735291, 2) == 735219);
console.log(rotateRightmostDigits(735291, 3) == 735912);
console.log(rotateRightmostDigits(735291, 4) == 732915);
console.log(rotateRightmostDigits(735291, 5) == 752913);
console.log(rotateRightmostDigits(735291, 6) == 352917);
