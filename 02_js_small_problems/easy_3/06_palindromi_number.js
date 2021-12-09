// Write a function that returns true if the string passed as an argument is a
// palindrome, or false otherwise. A palindrome reads the same forwards and
// backwards. For this problem, the case matters and all characters matter.

function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}

function isRealPalindrome(string) {
  return isPalindrome(string.replace(/[^A-Za-z\d]/g, '').toLowerCase());
}

function isPalindromicNumber(number) {
  return isRealPalindrome(String(number));
}

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true
