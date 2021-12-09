// function is hoisted up here

let counter = 5;  
let rate = 3;

function counter(count) { // error since we declared `counter` with `let` and we cannot have more than one declaration using `let`
  // ...
}

console.log('The total value is ' + String(counter * rate));
