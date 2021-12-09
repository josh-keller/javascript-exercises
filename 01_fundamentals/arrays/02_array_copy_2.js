let myArray = [1, 2, 3, 4];
const myOtherArray = myArray.slice();

myArray.pop();
console.log(myOtherArray);

myArray = [1, 2];
console.log(myOtherArray);

myArray = [1, 2, 3, 4];
const myOtherArray2 = myArray.map((elem) => elem);

myArray.pop();
console.log(myOtherArray2);

myArray = [1, 2];
console.log(myOtherArray2);
