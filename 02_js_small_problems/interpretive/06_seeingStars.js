// Write a function that displays an 8-pointed star in an nxn grid, where n is an odd integer that is supplied as an argument to the function. The smallest such star you need to handle is a 7x7 grid (i.e., when n is 7).

// INPUT: odd integer >= 7
// OUTPUT: display star (examples below)
// DATA: strings

// ALGORITHM:
// * Check that n is an odd and greater than 7
// * Calculate magicNum = (floor of n/2) - 1
// * Iterate beginning with a counter i = 0, while i <= magicNum:
//   - Output:
//     - constructLine(i, magicNum - i);

// * Output n *

// * Iterate beginning with a counter i = magicNum, while i >0:
//   - Output:
//     - constructLine(i, magicNum - i);

// HELPER: constructLine
// INPUT: 2 number: leading spaces, internal spaces
// OUTPUT: string with: ls_, *, is_, *, is_ *    
//     - ls spaces
//     - *
//     - is spaces
//     - *
//     - is spaces
//     - *


function star(n) {
  if (n % 2 !== 1 || n < 7) {
    return undefined;
  }
  
  const maxSpaces = Math.floor(n / 2) - 1;
  
  for (let i = 0; i <= maxSpaces; i += 1) {
    console.log(constructLine(i, maxSpaces - i));
  }
  
  console.log('*'.repeat(n));
  
  for (let i = maxSpaces; i >= 0; i -= 1) {
    console.log(constructLine(i, maxSpaces - i));
  }
}

function constructLine(leading, internal) {
  let line = ' '.repeat(leading) + '*';
  line += ' '.repeat(internal) + '*';
  line += ' '.repeat(internal) + '*';
  return line;
}

//console.log(constructLine(0, 2));
//console.log(constructLine(1, 1));
//console.log(constructLine(2, 0));


// 0 * 2 * 2 *
// 1 * 1 * 1 *
// 2 * 0 * 0 *
// 7*
// 2 * 0 * 0 *
// 1 * 1 * 1 *
// 0 * 2 * 2 *

star(7);
console.log('\n\n');
// logs
// *  *  *
//  * * *
//   ***
// *******
//   ***
//  * * *
// *  *  *

// n = 7
// **magic number: 2*

// n = 9
// **magic number: 3*

// magicNum = Math.floor(n / 2) - 1;


star(9);
// logs
// *   *   *
//  *  *  *
//   * * *
//    ***
// *********
//    ***
//   * * *
//  *  *  *
// *   *   *

// 0 * 3 * 3 * 
// 1 * 2 * 2 *
// 2 * 1 * 1 *
// 3 * 0 * 0 *

// 9 

// 3 * 0 * 0 *
// 2 * 1 * 1 *
// 1 * 2 * 2 *
// 0 * 3 * 3 * 
