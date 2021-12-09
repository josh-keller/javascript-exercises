function swap(string) {
  let words = string.split(' ');
  return words.map(word => word.replace(/([a-z])([a-z]*)([a-z])/gi, '$3$2$1'));
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"
