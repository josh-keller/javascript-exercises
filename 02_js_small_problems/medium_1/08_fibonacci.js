let fibonacci = ((function () {
  const fibNums = {1: 1, 2: 1};

  return function fibonacci(n) {
    if (fibNums[n]) return fibNums[n];
    let lastTwo = [fibonacci(n - 1), fibonacci(n - 2)];
    fibNums[n] = lastTwo[0] + lastTwo[1]
    return fibNums[n];
  }
})());

console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(4));
console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050
