// The calculateBonus function calculates the bonus for a given salary. It makes
// use of two arguments for determining the bonus: a salary amount and a boolean
// switch. If the boolean is true, the bonus should be half of the salary;
// otherwise the bonus should be 0. Fill in the blanks in the function so that
// it will work, then explain why it works.

function calculateBonus() {
  return arguments[1] ? arguments[0] / 2 : 0;
}

calculateBonus(2800, true);               // 1400
calculateBonus(1000, false);              // 0
calculateBonus(50000, true);              // 25000

// The `arguments` object is much like an array that holds an arbitrary number
// of arguments passed to a function. In this case, two arguments are passed in
// each call: a number and a boolean.
// The `arguments[1]` evaluates to the value of the second argument, a boolean.
// In the ternary expression, if the boolean is `true` the first expression
// after `?` will be evaluated. Otherwise the second will be evaluated.
// So, when the second argument is false, the function will return `0`. But if
// it is true it evaluates `arguments[0] / 2` and returns that value.
// `arguments[0]` gives us the value of the first argument passed to the
// function, so the bonus is half the number. Quite generous!
