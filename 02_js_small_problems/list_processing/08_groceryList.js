// INPUT: a grocery list in a two-dimensional array where each element in the grocery list contains a
// fruit name and a number that represents the desired quantity of that fruit.
// OUTPUT: returns a one-dimensional array such that each fruit name appears the number of times equal to its desired quantity.

// In the example below, we want to buy 3 apples, 1 orange, and 2 bananas. Thus,
// we return an array that contains 3 apples, 1 orange, and 2 bananas.

// function buyFruit(groceryList) {
//   return groceryList.reduce( (result, [item, count]) => {
//     return result.concat(repeat(item, count));
//   }, []);
// }

// function repeat(item, count) {
//   let result = [];
//   for (let i = 0; i < count; i += 1) {
//     result.push(item);
//   }

//   return result;
// }

function buyFruit(groceryList) {
  return groceryList.flatMap( ([item, count]) => Array(count).fill(item) );
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
