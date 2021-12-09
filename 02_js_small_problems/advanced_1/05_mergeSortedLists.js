// Write a function that takes two sorted arrays as arguments and returns a new array that contains all the elements from both input arrays in sorted order.

// You may not provide any solution that requires you to sort the result array. You must build the result array one element at a time in the proper order.

// Your solution should not mutate the input arrays.

// INPUT: two arrays of numbers (sorted)
// OUTPUT: a new array (all element combined and sorted order)
//
// RULES:
//  - No sorting the resulting array
//  - Build one element at a time
//  - Do not mutate input arrays
//  - Arrays might not be the same length
// 
// DATA STRUCTURE: array
// 
// ALGORITHM:
// * Declare: combinedArr = [], ptr1 = 0, ptr = 0
// * Declare: length1 = arr1.length, length2 = arr2.length
// * While ptr1 is less than length1 AND ptr2 is less than length2:
//   - IF arr1 element at ptr1 is less than arr2 element at ptr2
//     - Push the arr1 element into combinedArr
//     - Increment ptr1
//   - ELSE
//     - Push the arr2 element into combinedArr
//     - Increment ptr2
//
// * After iteration:
// * If ptr1 is equal to length of arr1
//   - add the rest of arr2 to combindedArr
// * Else:
//   - add the rest of arr1 to combindedArr
// * Return combindedArr

function merge(arr1, arr2) {
  let combinedArr = [];
  let ptr1 = 0;
  let ptr2 = 0;
  const length1 = arr1.length;
  const length2 = arr2.length;
  
  while (ptr1 < length1 && ptr2 < length2) {
    if (arr1[ptr1] < arr2[ptr2]) {
      combinedArr.push(arr1[ptr1]);
      ptr1 += 1;
    } else {
      combinedArr.push(arr2[ptr2]);
      ptr2 += 1;
    }
  }
  
  if (ptr1 === length1) {
    combinedArr = combinedArr.concat(arr2.slice(ptr2));
  } else {
    combinedArr = combinedArr.concat(arr1.slice(ptr1));
  }
  
  return combinedArr;
}

let a = [1, 2, 4];
let b = [3, 100];

console.log(merge(a, b));
console.log(a, b);
console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]
console.log(merge([1, 2, 3], [2, 3, 4]));      // [1, 2, 2, 3, 3, 4]
