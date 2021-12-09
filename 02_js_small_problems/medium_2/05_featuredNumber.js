// A featured number (something unique to this exercise) is an odd number that
// is a multiple of 7, with all of its digits occurring exactly once each. For
// example, 49 is a featured number, but 98 is not (it is not odd), 97 is not
// (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

// Write a function that takes an integer as an argument and returns the next
// featured number greater than the integer. Issue an error message if there is
// no next featured number.

// NOTE: The largest possible featured number is 9876543201.

// INPUT: Number
// OUTPUT: Number (next featured number larger than the input)
// RULES:
//  - Odd number
//  - Multiple of 7
//  - All digits occuring exactly once
//
// QUESTIONS:
//  - Issue an error? Does that mean it just returns a string with an error
//  message? Or should we actually raise an error?
//  - 

// 7, 21, 35, 49, 63, 91, 105, 119, 
// Begin with 7 - add 14 and check if there are any repeated digits


function isFeatured(num) {
  return (num % 7 === 0 && num % 2 === 1 && noRepeatedDigits(num));
}

// console.log(isFeatured(7) === true);
// console.log(isFeatured(14) === false);
// console.log(isFeatured(21) === true);
// console.log(isFeatured(22) === false);
// console.log(isFeatured(24) === false);
// console.log(isFeatured(77) === false);
// console.log(isFeatured(133) === false);
// console.log(isFeatured(84) === false);
// console.log(isFeatured(91) === true);
// console.log(isFeatured(777) === false);


function noRepeatedDigits(num) {
  let digits = String(num).split('');

  for (let i = 0; i < digits.length - 1; i += 1) {
    if (digits.includes(digits[i], i + 1)) return false;
  }

  return true;
}

// console.log(noRepeatedDigits(1) === true);
// console.log(noRepeatedDigits(12) === true);
// console.log(noRepeatedDigits(22) === false);
// console.log(noRepeatedDigits(35781) === true);
// console.log(noRepeatedDigits(35783) === false);
// console.log(noRepeatedDigits(35788) === false);

function featured(num) {
  let featuredNum;

  for (featuredNum = num + 1; featuredNum <= 9876543201; featuredNum += 1) {
    if (featuredNum % 7 === 0 && featuredNum % 2 === 1) break;
  }

  for (; featuredNum <= 9876543201; featuredNum += 14) {
    if (isFeatured(featuredNum)) return featuredNum;
  }

  return "There is no possible number that fulfills those requirements.";
}

console.log(featured(12));           // 21

console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."
