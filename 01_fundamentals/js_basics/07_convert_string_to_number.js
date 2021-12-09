// For this exercise we're going to learn more about type conversion by
// implementing our own parseInt function that converts a string of numeric
// characters (including an optional plus or minus sign) to a number.

// The function takes a string of digits as an argument, and returns the
// appropriate number. Do not use any of the built-in functions for converting a
// string to a number type.

// For now, do not worry about leading + or - signs, nor should you worry about
// invalid characters; assume all characters will be numeric.

const ZERO = '0'.codePointAt(0);

// function stringToInteger(string) {
//   let integer = 0;
//   let place = 1;

//   for (let i = 0; i < string.length; i++) {
//     integer += digitInPlace(string, place) * place;
//     place *= 10;
//   }

//   return integer;
// }

// function digitInPlace(string, place) {
//   const index = string.length - 1 - Math.log10(place);
//   return string.codePointAt(index) - ZERO;
// }

function charToDigit(character) {
  return character.codePointAt(0) - ZERO;
}

function stringToInteger(string) {
  const reducer = (sum, chr) => 10 * sum + charToDigit(chr);
  return string.split('').reduce(reducer, 0);
}

// console.log(digitInPlace('0', 1) === 0);
// console.log(digitInPlace('9', 1) === 9);
// console.log(digitInPlace('12', 10) === 1);
// console.log(digitInPlace('34', 1) === 4);

console.log(stringToInteger('4321'));// == 4321);
console.log(stringToInteger('570'));// == 570);
