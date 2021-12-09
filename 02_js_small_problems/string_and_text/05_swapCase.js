function isUpper(chr) {
  return chr >= 'A' && chr <= 'Z';
}

// function swapCase(string) {
//   const segments = string.match(/[a-z]+|[A-Z]+|[^a-zA-Z]/g);
//   return segments.map(segment => {
//     if (isUpper(segment[0])) {
//       return segment.toLowerCase();
//     } else {
//       return segment.toUpperCase();
//     }
//   }).join('');
// }

function swapLetter(chr) {
  if (chr >= 'A' && chr <= 'Z') {
    return chr.toLowerCase();
  }
  
  return chr.toUpperCase();
}

function swapCase(string) {
  return string.split('')
               .map(swapLetter)
               .join('');
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"
