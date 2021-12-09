function productOfSums(array1, array2) {
  let result = total(array1) * total(array2);
  return result;
}

function total(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
  }

  return sum;
}

console.log(productOfSums([1, 2, 3], [4, 5, 6]));

// The main problem here is that we don't have a return statement. Instead,
// `total` will return `undefined`. When we multiply `undefined` * `undefined`
// the `undefined` terms are coerced to `NaN` and `NaN` is the result of the
// multiplication.
//
// Adding the return statement alone won't fix it, however. This is because we
// do not initialize `sum` in the `total()` funciton. Because it is not given an
// initializer value it is implicitly initialized to `undefined`. Thus, when we
// try to add to it on `line 10` with `sum += numbers[i]`, we are really saying
// `sum = sum + numbers[i]` which evaluates to `sum = undefined + numbers[i]`.
// Since `undefined` will be coerced into NaN and `NaN` added to any number is
// `NaN`, the value of `sum` after the first iteration will be `NaN`. Subsequent
// iterations will continue to assign `NaN` to `sum` since the expression will
// alwasy be `sum = NaN + numbers[i]`;
