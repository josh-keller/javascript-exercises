// Refactor previous exercise to take multiple arguments

// function concat(array1, ...concatArgs) {
//   let newArray = array1.slice();

//   for (let idx = 0; idx < concatArgs.length; idx += 1) {
//     concatTwo(newArray, concatArgs[idx]);
//   }

//   return newArray;
// }
// function concatTwo(newArray, secondArgument) {
//   if (Array.isArray(secondArgument)) {
//     for (let idx = 0; idx < secondArgument.length; idx += 1) {
//       newArray.push(secondArgument[idx]);
//     }
//   } else {
//     newArray.push(secondArgument);
//   }

//   return newArray;
// }

function concat(...args) {
  let newArray = [];

  for (let argIdx = 0; argIdx < args.length; argIdx += 1) {
    let currentArg = args[argIdx];

    if (Array.isArray(currentArg)) {
      for (let arrayIdx = 0; arrayIdx < currentArg.length; arrayIdx += 1) {
        newArray.push(currentArg[arrayIdx]);
      }
    } else {
      newArray.push(currentArg);
    }
  }

  return newArray;
}
console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]));    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concat([1, 2], 'a', ['one', 'two']));        // [1, 2, "a", "one", "two"]
console.log(concat([1, 2], ['three'], 4));               // [1, 2, "three", 4]
console.log(concat([1, 2, 3], [4, 5, 6]));    // [1, 2, 3, 4, 5, 6]
