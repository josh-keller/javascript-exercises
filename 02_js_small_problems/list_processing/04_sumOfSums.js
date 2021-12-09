// INPUT: an array of numbers
// OUTPUT: the sum of the sums of each leading subsequence in that array.
// - You may assume that the array always contains at least one number.

// function sumOfSums(numbers) {
//   let length = numbers.length;

//   return numbers.reduce((sum, number, idx) => {
//     return sum + (number * (length - idx));
//   }, 0);
// }

function sumOfSums(numbers) {
  return numbers.map((number, idx) => numbers.slice(0, idx + 1)
                                             .reduce((sum, value) => sum + value))
                .reduce((sum, value) => sum + value);
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35
