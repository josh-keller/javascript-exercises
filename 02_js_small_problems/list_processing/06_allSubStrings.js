// INPUT: a string
// OUTPUT: a list of all substrings of the string
// - Order the returned list by where in the string the substring begins.
//   - This means that all substrings that start at index position 0 should come first
//   - then all substrings that start at index position 1, and so on.
// - Since multiple substrings will occur at each position, return the substrings at a given index from shortest to longest.

// You may (and should) use the leadingSubstrings function you wrote in the previous exercise:

function leadingSubstrings(string) {
  const result = [];
  for (let end = 1; end <= string.length; end += 1) {
    result.push(string.slice(0, end));
  }

  return result;
}

// function substrings(string) {
//   let results = [];

//   for (let start = 0; start < string.length; start += 1) {
//     results = results.concat(leadingSubstrings(string.slice(start)));
//   }

//   return results;
// }

// function substrings(string) {
//   const results = [];

//   for (let start = 0; start < string.length; start += 1) {
//     for (let end = start + 1; end <= string.length; end += 1) {
//       results.push(string.slice(start, end));
//     }
//   }

//   return results;
// }
//
//

function substrings(string) {
  return string.split('')
               .map((chr, idx) => leadingSubstrings(string.slice(idx)))
               .reduce((result, subArr) => result.concat(subArr), []);
}

console.log(substrings('abcde'));

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]
