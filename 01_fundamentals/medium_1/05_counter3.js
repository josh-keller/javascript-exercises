// function is hoisted up here - `counter` defined and initialized with function

var counter = 5;  // counter reassigned to 5 
var rate = 3;

function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate)); // 5 * 3 = 15;
