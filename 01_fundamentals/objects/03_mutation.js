// What will the following code log to the console and why? Don't run the code until after you have tried to answer.

// const array1 = ['Moe', 'Larry', 'Curly', 'Shemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo'];
// const array2 = [];

// for (let i = 0; i < array1.length; i += 1) {
//   array2.push(array1[i]);
// }

// for (let i = 0; i < array1.length; i += 1) {
//   if (array1[i].startsWith('C')) {
//     array1[i] = array1[i].toUpperCase();
//   }
// }

// console.log(array2);

// This code will log: `Moe, Larry, Curly, Shemp, Harpo, Chico, Groucho, Zeppo`.
// Let's step through the execution to find out why. On `line 1` we have
// constant `array1` declared and assigned to an array that is initialized wtih
// 8 strings. Then another constant is declared and initialized to an empty
// array.
//
// On lines `6-8` we have a for look that iterates through the entire length of
// `array1` and pushes each element from the array that `array1` points to, onto
// the array referenced by `array2`. After this we have two different arrays,
// but each element of `array2` points to the element at the same index in
// `array1`. They are separate arrays, but they containt the exact same strings (not
// just the same values.)
//
// Then we have another `for` loop over the lenght of `array1`. This loop
// contains an `if` statement which tests to see if the current element begins
// with `C` and if it does, it reassigns the current index of the array
// referenced by `array1` to the return value of `array1[i].toUpperCase()`. This
// call to `toUpperCase()` returns a new string and so we are reassigning
// certain elements of the `array1` array to point to new strings. This does not
// affect the elements of `array2` since new strings were returned and the
// original values were not mutated. This is why we see the original values when
// we log `array2` on `line 16`.
//
// This demonstrates several concepts, especially the immutability of strings
// and the fact that methods called on strings return new strings and do not
// mutate the caller. It also demonstrates that we can reassign elements of an
// array even when the array is assigned to a constant. We are able to mutate
// the array even though we cannot reassign the constant to a new value. It is
// still pointing to the same array, even if the value of that array changes.

// FURTHER EXPLORATION:
// What would happen if an object literal was part of the array1 elements pushed
// to array2? Would changes made to the object literal in array1 be reflected in
// array2?
// This would depend entirely on whether a mutating or non-mutating method is
// called on the object. If a method that returns a new object is called, the
// result would be the same. However, if a method that mutates the object were
// called, that change would affect both arrays.
//
// How would you change the code so that any changes made to array1 in the second
// for loop get reflected to array2?
//
// array1 = array2;

let arr1 = [['Moe'], ['Curly']];
let arr2 = [];

arr1.forEach(arr => arr2.push(arr));

arr1[0] = [arr1[0][0].toUpperCase()];

console.log(arr2) //[ [ 'MOE' ], [ 'Curly' ] ]
console.log(arr1)
