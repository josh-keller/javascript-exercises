function counter(count) {   // function is declared here - counter variable is also created
  // ...
}

// rate variable is created and implicitly initialized to `undefined`
//
console.log('The total value is ' + String(counter * rate));  // here the expression is: 
                                         // function * undefined -> NaN * NaN -> NaN

var counter = 5;
var rate = 3;
