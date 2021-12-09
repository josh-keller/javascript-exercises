// function is hoisted up here
var counter = 5; // this becomes simple reassignment - counter = 5
var rate = 3;
console.log('The total value is ' + String(counter * rate)); // multiplication is performed 5 * 3 = 15 -> '15'

function counter(count) {
  // ...
}
