const ZERO = '0'.codePointAt(0);

function charToDigit(character) {
  return character.codePointAt(0) - ZERO;
}

function stringToInteger(string) {
  const reducer = (sum, chr) => 10 * sum + charToDigit(chr);
  return string.split('').reduce(reducer, 0);
}

function stringToSignedInteger(string) {
  switch (string[0]) {
    case ('+'): return stringToInteger(string.slice(1));
    case ('-'): return -stringToInteger(string.slice(1));
    default: return stringToInteger(string);
  }
}

console.log(stringToSignedInteger('4321'));      // 4321
console.log(stringToSignedInteger('-570'));      // -570
console.log(stringToSignedInteger('+100'));      // 100
