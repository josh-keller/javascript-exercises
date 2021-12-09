// The oddities function takes an array as an argument and returns a new array
// containing every other element from the input array. The values in the
// returned array are the first (index 0), third, fifth, and so on, elements of
// the input array. The program below uses the array returned by oddities as
// part of a comparison. Can you explain the results of these comparisons?

function oddities(array) {
  const oddElements = [];

  for (let i = 0; i < array.length; i += 2) {
    oddElements.push(array[i]);
  }

  return oddElements;
}

oddities([2, 3, 4, 5, 6]) === [2, 4, 6];      // false
oddities(['abc', 'def']) === ['abc'];         // false

// The comparisons above compare two different arrays, so they both return
// `false` even though the values of the arrays are the same. Both the `===` and
// `==` operators with two arrays as operands will compare whether the two
// arrays are the same array in memory and not whether their values are the
// same.
//
// LS Explanation:
// Both of these comparisons return false because the arrays being compared are
// two different objects, even though they contain the same values. Recall that
// Arrays are Objects, so the only way for the equality operator to return true
// for array comparison is if they are the same object or if the comparison is
// done on the contents of the arrays and not on the arrays themselves.
