function makeShifter(shift) {
  shift %= 26;
  const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const first = CHARS.slice(shift);
  const second = CHARS.slice(0, shift);
  const OFFSET_CHARS = first + second + first.toLowerCase() + second.toLowerCase();

  const charIndex = function(chr) {
    const UPPER_OFFSET = 'A'.charCodeAt(0);
    const LOWER_OFFSET = 'a'.charCodeAt(0) - 26;
    return chr.charCodeAt(0) - (/[A-Z]/.test(chr) ? UPPER_OFFSET : LOWER_OFFSET);
  }

  return function(chr) {
    if (/[A-Za-z]/.test(chr)) {
      return OFFSET_CHARS[charIndex(chr)];
    }

    return chr;
  }
}

function caesarEncrypt(string, key) {
  const shifter = makeShifter(key);
  return string.split('').map(shifter).join('');
}

// simple shift
console.log(caesarEncrypt('A', 0));       // "A"
console.log(caesarEncrypt('A', 3));       // "D"

// wrap around
console.log(caesarEncrypt('y', 5));       // "d"
console.log(caesarEncrypt('a', 47));      // "v"

// all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"

