function makeStaggerer({ startingCase = 'upper', ignore = false, regex })  {
  let upperCase = startingCase === 'upper';
  ignore = ignore || !!regex;

  if (ignore && !regex) {
    regex = /[^a-z]/i;
  }

  return function(chr) {
    if (ignore && regex.test(chr)) {
      return chr;
    }

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
  return string.split('').map(makeStaggerer({ ignore: true })).join('');
}

function staggeredCase2(string) {
  return string.split('').map(makeStaggerer({ regex: /[ ]/ })).join('');
}

function staggeredCase3(string) {
  return string.split('').map(makeStaggerer({ startingCase: 'lower', regex: /[ _]/ })).join(''); 
}

console.log(staggeredCase('I Love Launch School!') == "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase('ALL CAPS') == "AlL cApS");
console.log(staggeredCase('ignore 77 the 444 numbers') == "IgNoRe 77 ThE 444 nUmBeRs");

console.log(staggeredCase2('Ignore the s p a c e s'));        // "IgNoRe ThE s P a C e S"
console.log(staggeredCase3('Start lower_case, ignore_and s p a c e s')); //"sTaRt LoWeR_cAsE, IgNoRe_AnD s P a C e S"
