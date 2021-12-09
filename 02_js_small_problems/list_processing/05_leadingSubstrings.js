// INPUT: a string
// OUTPUT: a list of substrings of that string
// - Each substring should begin with the first letter of the word
// - list should be ordered from shortest to longest.

// function leadingSubstrings(string) {
//   return string.split('').map((chr, idx, arr) => arr.slice(0, idx + 1).join(''));
// }

function leadingSubstrings(string) {
  const result = [];
  for (let end = 1; end <= string.length; end += 1) {
    result.push(string.slice(0, end));
  }

  return result;
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
