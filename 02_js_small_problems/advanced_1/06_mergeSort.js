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

// Merge sort is a recursive sorting algorithm that works by breaking down an
// array's elements into nested subarrays, then combining those nested subarrays
// back together in sorted order. It is best explained with an example. Given
// the array [9, 5, 7, 1], let's walk through the process of sorting it with
// merge sort. We'll start off by breaking the array down into nested subarrays:

// We then work our way back to a flat array by merging each pair of nested
// subarrays back together in the proper order:

// Write a function that takes an array argument and returns a new array that
// contains the values from the input array in sorted order. The function should
// sort the array using the merge sort algorithm as described above. You may
// assume that every element of the array will be of the same data type—either
// all numbers or all strings.

// Feel free to use the merge function you wrote in the previous exercise.

function mergeSort(array) {
  if (array.length <= 1) return array;

  const midpoint = array.length / 2;
  const sortedBeginning = mergeSort(array.slice(0, midpoint));
  const sortedEnd = mergeSort(array.slice(midpoint));

  return merge(sortedBeginning, sortedEnd);
}

console.log(mergeSort([5]));
console.log(mergeSort([]));
console.log(mergeSort([9, 5, 7, 1]));           // [1, 5, 7, 9]
console.log(mergeSort([5, 3]));                 // [3, 5]
console.log(mergeSort([6, 2, 7, 1, 4]));        // [1, 2, 4, 6, 7]

console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]
