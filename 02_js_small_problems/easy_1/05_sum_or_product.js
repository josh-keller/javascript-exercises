// Write a program that asks the user to enter an integer greater than 0, then
// asks if the user wants to determine the sum or the product of all numbers
// between 1 and the entered integer, inclusive.

let rlSync = require("readline-sync");

const number = parseInt(rlSync.question("Please enter a positive number: "));
const choicePrompt = `Do you want the (s)um or (p)roduct up to ${number}? `
const choice = rlSync.question(choicePrompt, {limit: ['s', 'p']});
let answer;
let operation;

if (choice.toLowerCase() === 's') {
  operation = ((a, b) => a + b);
  answer = 0;
} else {
  operation = ((a, b) => a * b);
  answer = 1;
}

for (let currNum = 1; currNum <= number; currNum += 1) {
  answer = operation(answer, currNum);
}

console.log(answer);
