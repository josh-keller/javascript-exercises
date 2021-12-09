// Write a function that takes a positive integer, n, as an argument and logs a
// right triangle whose sides each have n stars. The hypotenuse of the triangle
// (the diagonal side in the images below) should have one end at the lower-left
// of the triangle, and the other end at the upper-right.

function triangle(height) {
  for (let stars = 1; stars <= height; stars += 1) {
    console.log(" ".repeat(height - stars) + "*".repeat(stars));
  }
}

triangle(5);

/*
    *
   **
  ***
 ****
*****
*/

triangle(9);

/*

        *
       **
      ***
     ****
    *****
   ******
  *******
 ********
*********

*/
