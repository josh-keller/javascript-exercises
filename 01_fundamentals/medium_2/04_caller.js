function doubler(number, caller) {
  console.log(`This function was called by ${caller}.`);
  return number + number;
}

function makeDoubler(caller) {
  return number => doubler(number, caller);
}

console.log(doubler(5, 'Victor'));                   // returns 10
// logs:
// This function was called by Victor.


const doubler2 = makeDoubler('Victor');
console.log(doubler2(5));                             // returns 10
// logs:
// This function was called by Victor.
