function makeStaggerer(startingCase = 'upper') {
  let upperCase = startingCase === 'upper';

  return function(chr) {
    if (upperCase) {
      upperCase = false;
      return chr.toUpperCase();
    } else {
      upperCase = true;
      return chr.toLowerCase();
    }
  }
}

function staggeredCase(string) {
  return string.split('').map(makeStaggerer()).join('');
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"
