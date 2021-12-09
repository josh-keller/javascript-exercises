// Practice with Array.prototype.splice()
// In each example, use splice to remove/add the indicated elements and capture
// the return value in a variable `removed`

let myFish;
let removed;


// Remove 0 (zero) elements before index 2, and insert "drum"

myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
removed = myFish.splice(2, 0, 'drum');

console.log(myFish);  // ["angel", "clown", "drum", "mandarin", "sturgeon"]
console.log(removed);  // [], no elements removed
console.log("----------");

// Remove 0 (zero) elements before index 2, and insert "drum" and "guitar"

myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
removed = myFish.splice(2, 0, 'drum', 'guitar');

console.log(myFish); // ["angel", "clown", "drum", "guitar", "mandarin", "sturgeon"]
console.log(removed); // [], no elements removed
console.log("----------");

// Remove 1 element at index 3

myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon']
removed = myFish.splice(3, 1);

console.log(myFish); // ["angel", "clown", "drum", "sturgeon"]
console.log(removed); // ["mandarin"]
console.log("----------");


// Remove 1 element at index 2, and insert "trumpet"

myFish = ['angel', 'clown', 'drum', 'sturgeon']
removed = myFish.splice(2, 1, 'trumpet');

console.log(myFish); // ["angel", "clown", "trumpet", "sturgeon"]
console.log(removed); // ["drum"]
console.log("----------");

// Remove 2 elements from index 0, and insert "parrot", "anemone" and "blue"

myFish = ['angel', 'clown', 'trumpet', 'sturgeon']
removed = myFish.splice(0, 2, 'parrot', 'anemone', 'blue');

console.log(myFish); // ["parrot", "anemone", "blue", "trumpet", "sturgeon"]
console.log(removed); // ["angel", "clown"]
console.log("----------");

// Remove 2 elements, starting from index 2

myFish = ['parrot', 'anemone', 'blue', 'trumpet', 'sturgeon']
removed = myFish.splice(2, 2);

console.log(myFish); // ["parrot", "anemone", "sturgeon"]
console.log(removed); // ["blue", "trumpet"]
console.log("----------");

// Remove 1 element from index -2

myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
removed = myFish.splice(-2, 1);

console.log(myFish); // ["angel", "clown", "sturgeon"]
console.log(removed); // ["mandarin"]
console.log("----------");

// Remove all elements, starting from index 2

myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
removed = myFish.splice(2);

console.log(myFish); // ["angel", "clown"]
console.log(removed); // ["mandarin", "sturgeon"]

