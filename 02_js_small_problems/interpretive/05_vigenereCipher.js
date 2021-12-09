// The Vigenere Cipher encrypts alphabetic text using polyalphabetic
// substitution. It uses a series of Caesar Ciphers based on the letters of a
// keyword. Each letter of the keyword is treated as a shift value. For
// instance, the letter 'B' corresponds to a shift value of 1, and the letter
// 'd' corresponds to a shift value of 3. In other words, the shift value used
// for a letter is equal to its index value in the alphabet. This means that the
// letters 'a'-'z' are equivalent to the numbers 0-25. The uppercase letters
// 'A'-'Z' are also equivalent to 0-25.

// Applying the Vigenere Cipher is done sequentially for each character by
// applying the current shift value to a Caesar Cipher for that particular
// character. To make this more concrete, let's look at the following example:


// INPUT: 2 strings - A message, a keyword
// OUTPUT: 1 string - an encoded message
//
// RULES:
//  - Message is encoded by shifting each letter of the message
//  - Shift is determined by the letter's position in the message and the "shift
//  value" of the corresponding character of the keyword
//  - (i.e.) keyword 'meat' --> shift values: 0: 12, 1: 4, 2: 0, 19
//  - Shift values are applied repeatedly for indexes that are congruent with corresponding
//    index in the keyword when moded by length of keyword
//    (i.e. indexes 0, 4, 8, 12, etc have a shift of 12, index 1, 5, 9, etc have
//    shift of 4, and so on)  idx % 4 === 0, 1, 2, 3
//  - non-alpha characters are preserved - not shifted, shift number is not
//    advanced
//
// MENTAL MODEL:
//  - First is determine and keep track of which shift value we are on for each character
//    * Determine shift (array)
//      - Convert all characters of the keyword to lowercase
//      - Get the char code of each character
//      - Subract char code 'a' from each character
//      - Store in an array ('shiftVals')
//    * Keep track of which shift we are on
//      - Have a variable 'shiftIdx' that references the current idx in `shiftVals`
//      - If the character is alphabetic:
//        - increment the shiftIdx
//        - return the shifted character
//      - Else
//        - return the character


function createEncoder(keyword) {
  const shiftVals = keyword.toLowerCase()
                           .split('')
                           .map(chr => chr.charCodeAt(0) - 'a'.charCodeAt(0));

  let shiftIdx = 0;
  let length = shiftVals.length;

  // This returns a function that will encode one character at a time each time
  // and automatically go to the next shift value.
  return function encoder(chr) {
    if (/[a-zA-Z]/.test(chr)) {
      const shiftedChr = shift(chr, shiftVals[shiftIdx]);
      shiftIdx = (shiftIdx + 1) % length;
      return shiftedChr;
    } 
    
    return chr;
  };
}

function shift(chr, shift) {
  let alphaPos;
  let baseCharCode;

  if (/[a-z]/.test(chr)) {
    baseCharCode =  'a'.charCodeAt(0);
    alphaPos = chr.charCodeAt(0) - baseCharCode;
  } else {
    baseCharCode = 'A'.charCodeAt(0);
    alphaPos = chr.charCodeAt(0) - baseCharCode;
  }

  const shiftedCharCode = baseCharCode + ((alphaPos + shift) % 26);
  return String.fromCharCode(shiftedCharCode);
}

function encodeVigenere(message, keyword) {
  const encoder = createEncoder(keyword);

  return message.split('').map(encoder).join('');
}

// console.log(shift('a', 1)); // 'b'
// console.log(shift('A', 1)); // 'B'
// console.log(shift('A', 3)); // 'D'
// console.log(shift('z', 3)); // 'c'

//
//  - createEncoder(keyword)
//    * determine the shifts specified by the keyword
//    * return a closure where successive calls to the returned function will
//      apply the correct shift to each new argument
const encoder = createEncoder("bcde"); [1, 2, 3, 4]
// const encoder2 = createEncoder('aaa'); [0, 0, 0]
// const encoder3 = createEncoder('xyz'); [23, 24, 25]

console.log(encoder("H")); // -> "I"
console.log(encoder("e")); // -> "g"
console.log(encoder("l")); // -> "o"
console.log(encoder("l")); // -> "p"
console.log(encoder("!")); // -> "!"
console.log(encoder("o")); // -> "p"

//
//  - Apply that shift to each character

console.log(encodeVigenere("Hello", "aaaa")); // "Hello"
console.log(encodeVigenere("Hello", "bbbb")); // "Ifmmp"
console.log(encodeVigenere("Hello", "bcde")); // "Igopp"
console.log(encodeVigenere("zoo", "xyz"));    // "wmn"
console.log(encodeVigenere("Hello world!", "bcde")); // "Igopp yrvmf!"

console.log(encodeVigenere("Pineapples don't go on pizzas!", "meat")); //"Bmnxmtpeqw dhz'x gh ar pbldal!"


// Notice that in the example, the key isn't moved forward if the character
// isn't in the alphabet. Like the Caesar Cipher, the Vigenere Cipher only
// encrypts alphabetic characters.

// Write a function that implements the Vigenere Cipher. The case of the keyword
// doesn't matter—in other words, the resulting encryption won't change
// depending on the case of the keyword's letters (e.g., 'MEat' === 'mEaT').

// For a quick lookup of a ciphertext per character, you may consult this tabula
// recta. Each row of the table corresponds to a Caesar Cipher encryption
// using the columns' character letter as a shift value.
