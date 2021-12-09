// Write a function that takes a string argument and returns a new string that
// contains the value of the original string with all consecutive duplicate
// characters collapsed into a single character.

// function crunch(string) {
//   let output = '';
//   let lastChar = '';

//   for (let idx = 0; idx < string.length; idx++) {
//     if (string[idx] !== lastChar) {
//       output += string[idx];
//       lastChar = string[idx];
//     }
//   }

//   return output;
// }

function crunch(string) {
  return string.replace(/(.)\1+/g, '$1');
}

console.log(crunch('ddaaiillyy ddoouubbllee') == "daily double");
console.log(crunch('4444abcabccba') == "4abcabcba");
console.log(crunch('ggggggggggggggg') == "g");
console.log(crunch('a') == "a");
console.log(crunch('') == "");

