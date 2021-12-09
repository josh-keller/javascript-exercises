let startingBalance = 1;
const chicken = 5;
const chickenQuantity = 7;

function totalPayable(item, quantity) {
  return startingBalance + (item * quantity);
}

startingBalance = 5;
console.log(totalPayable(chicken, chickenQuantity)); // 5 + (5 * 7)  = 40

startingBalance = 10;                                // 10 + (5 * 7) = 45
console.log(totalPayable(chicken, chickenQuantity));

// The code logs `40` and `45`. This demonstrates closures in JavaScript and
// here is how:
// - We begin by declaring a variable `startingBalance` and two constants
// `chicken` and `chickenQuantity`.
// - We then declare a function `totalPayable`. With the function we reference
// `startingBalance` from the outer scope. Defining this function creates a
// closure which has access to the variables in the lexical environment at the
// time the function is defined. This means that `startingBalance` has access to
// `startingBalance` whenever it is called.
// - Before we call `totalPayable`, we reassign `startingBalance` to `5`. Thus,
// when we call `totalPayable` on `line 10` the return statement on `line 6`
// evaluates to `5 + (5 * 7)` (the second `5` and the `7` being the values
// passed in as arguments).
// - We reassign `startingBalance` again, this time to `10`, and call
// `totalPayable` again. We see that the return value changes because the value
// of `startingBalance` is different. We have passed the constants `chicken` and
// `chickenQuantity` as arguments in both cases, so they are not the source of
// the differing output.
//
// ** Retains access ** 
