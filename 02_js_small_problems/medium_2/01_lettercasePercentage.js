function letterPercentages(string) {
  const total = string.length;
  const lowercaseCount = string.match(/[a-z]/g)?.length || 0;
  const uppercaseCount = string.match(/[A-Z]/g)?.length || 0;
  const neitherCount = (total - lowercaseCount - uppercaseCount);


  return {
    lowercase: (100 * lowercaseCount / total).toFixed(2),
    uppercase: (100 * uppercaseCount / total).toFixed(2),
    neither: (100 * neitherCount / total).toFixed(2),
  };
}


console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

console.log(letterPercentages(''));

console.log(letterPercentages('AbCd'));
// { lowercase: "50.00", uppercase: "50.00" }
