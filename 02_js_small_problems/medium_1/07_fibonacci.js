function fibonacci(n) {
  let last = 0;
  let curr = 1;
  let next;
  let counter = 1;

  while (counter < n) {
    next = curr + last;
    last = curr;
    curr = next;
    counter += 1;
  }

  return curr;
}
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(4));
console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050
