// Write a function that takes a year as input and returns the century. The
// return value should be a string that begins with the century number, and ends
// with 'st', 'nd', 'rd', or 'th' as appropriate for that number.

// New centuries begin in years that end with 01. So, the years 1901 - 2000
// comprise the 20th century.

function century(year) {
  const centuryNum = Math.ceil(year / 100); 
  return ordinal(centuryNum);
}

function ordinal(num) {
  const numString = String(num);
  const lastTwoDigits = num % 100;
  const lastDigit = num % 10;
  
  switch (lastTwoDigits) {
    case 11:
    case 12:
    case 13:
      return numString + 'th';
  }

  switch (lastDigit) {
    case (1):
      return numString + 'st';
    case (2):
      return numString + 'nd';
    case (3):
      return numString + 'rd';
    default:
      return numString + 'th';
  }
}

console.log(century(2000) == "20th");
console.log(century(2001) == "21st");
console.log(century(1965) == "20th");
console.log(century(256) == "3rd");
console.log(century(5) == "1st");
console.log(century(10103) == "102nd");
console.log(century(1052) == "11th");
console.log(century(1127) == "12th");
console.log(century(11201) == "113th");
