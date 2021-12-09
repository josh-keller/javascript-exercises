// Write a function that displays a four-pointed diamond in an nxn grid, where n
// is an odd integer supplied as an argument to the function. You may assume
// that the argument will always be an odd integer.

function diamond(maxStars) {
  let spaces;
  let stars;

  for (stars = 1, spaces = (maxStars - 1) / 2;
    stars < maxStars;
    stars += 2, spaces -= 1) {
    console.log(' '.repeat(spaces) + '*'.repeat(stars));
  }

  console.log(' '.repeat(spaces) + '*'.repeat(stars));

  for (; stars > 0; stars -= 2, spaces += 1) {
    console.log(' '.repeat(spaces) + '*'.repeat(stars));
  }
}


diamond(1);
// logs
// *

console.log();
diamond(3);
// logs
//  *   1 1 1
// ***  0 3 0
//  *   1 1 1

console.log();
diamond(9);
// logs
/*
 *       4 1 4
 ***      3 3 3
 *****     2 5 2
 *******    1 7 1
 *********   0 9 0
 *******
 *****
 ***
 *
 */
