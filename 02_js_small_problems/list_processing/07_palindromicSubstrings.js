// INPUT: string
// OUTPUT: a list of all substrings of a string that are palindromic.
//  - each substring must consist of the same sequence of characters forwards as backwards
//  - The substrings in the returned list should be sorted by their order of appearance in the input string
//  - Duplicate substrings should be included multiple times.
//  - For the purpose of this exercise, you should consider all characters and pay attention to case
//    * that is, 'AbcbA' is a palindrome, but 'Abcba' and 'Abc-bA' are not.
//  - In addition, assume that single characters are not palindromes.

//  - You may (and should) use the substrings function you wrote in the previous exercise.

function palindromes(string) {
  return substrings(string).filter(isPalindrome);
}

function isPalindrome(string) {
  return string.length > 1 && string.split('').reverse().join('') === string;
}


// function isPalindrome(string) {
//   if (string.length === 1) return false;
//   for (let begin = 0; begin < Math.floor(string.length / 2); begin += 1) {
//     let end = string.length - begin - 1;
//     if (string[begin] !== string[end]) {
//       return false;
//     }
//   }

//   return true;
// }


function substrings(string) {
  const results = [];

  for (let start = 0; start < string.length; start += 1) {
    for (let end = start + 1; end <= string.length; end += 1) {
      results.push(string.slice(start, end));
    }
  }

  return results;
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
