const ZERO = '0'.codePointAt(0);

function integerToString(number) {
  let digits = [];

  do {
    let digit = number % 10;
    digits.unshift(digitToChar(digit));

    number = Math.floor(number / 10);
  } while (number > 0); 

  return digits.join('');
}

function digitToChar(digit) {
  return String.fromCodePoint(digit + ZERO);
}


console.log(integerToString(4321));      // "4321"
console.log(integerToString(0));         // "0"
console.log(integerToString(5000));      // "5000"
