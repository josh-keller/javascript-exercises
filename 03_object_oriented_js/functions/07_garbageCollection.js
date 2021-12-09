function makeCounter() {
  let count = 1;             // count -> 1;

  return () => {
    console.log(count++)     // 
  };
}

const counter = makeCounter();
counter();
// more code
//
//
// The garbage collector will not collect the value assigned to `count` after
// `line 10`. This is because `count` is referenced in the closure that is
// referenced by `counter`. As long as `counter` references that closure, the
// reference to `count` will remain ineligible for GC.
//
// LS Explanation:
// No, the value assigned to the variable count will not be garbage collected
// after the function counter is run. The counter function has closed over its
// parent scope where the value assigned to count exists. As long as the counter
// function exists, it needs to have access to that scope and so JavaScript
// cannot garbage collect the value assigned to count.
