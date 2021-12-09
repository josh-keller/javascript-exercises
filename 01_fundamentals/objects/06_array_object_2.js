// A user wrote a function that takes an array as an argument and returns its
// average. Given the code below, the user expects the average function to
// return 5. Is the user's expectation correct? Why or why not?

const myArray = [5, 5];
myArray[-1] = 5;
myArray[-2] = 5;

function average(array) {
  let sum = 0;

  for (let i = -2; i < array.length; i += 1) {
    sum += array[i];
  }

  return sum / array.length;
}

average(myArray);

// This will not return 5. This is because the `for` loop in the `average()`
// function begins iteration at `i = -2` and stops at one less than
// `array.length`. However, `array.length` does not take into account property
// names that are not non-negative integers. Thus, it has a `length` of `2` but
// it iterates over a total of 4 values.
//
