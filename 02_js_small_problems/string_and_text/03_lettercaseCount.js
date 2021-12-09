// function numOfMatches(string, regex) {
//   const match = string.match(regex);
//   return (match) ? match.length : 0;
// }

// function letterCaseCount(string) {
//   const counts = {};
//   counts.lowercase = numOfMatches(string, /[a-z]/g);
//   counts.uppercase = numOfMatches(string, /[A-Z]/g);
//   counts.neither = string.length - counts.lowercase - counts.uppercase;
//   return counts;
// }
//
// LS Solution:

function letterCaseCount(string) {
  const lowerCaseLetters = string.match(/[a-z]/g) || [];
  const upperCaseLetters = string.match(/[A-Z]/g) || [];

  return {
    lowercase: lowerCaseLetters.length,
    uppercase: upperCaseLetters.length,
    neither: string.length - lowerCaseLetters.length - upperCaseLetters.length,
  };
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }
