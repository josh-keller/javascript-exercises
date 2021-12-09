const ZERO = '0'.codePointAt(0);

function signedIntegerToString(number) {
  let result = '';
  let sign = '';
  if (number > 0) {
    sign = '+';
  } else if (number < 0) {
    sign = '-';
  }

  number = Math.abs(number);

  do {
    let digit = number % 10;
    result = digitToChar(digit) + result;

    number = Math.floor(number / 10);
  } while (number > 0); 

  return sign + result;
}

function digitToChar(digit) {
  return String.fromCodePoint(digit + ZERO);
}

console.log(signedIntegerToString(4321));      // "+4321"
console.log(signedIntegerToString(-123));      // "-123"
console.log(signedIntegerToString(0));         // "0"
