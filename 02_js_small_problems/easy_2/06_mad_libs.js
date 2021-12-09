if (typeof prompt === 'undefined') {
  let rlSync = require("readline-sync");

  function prompt (message) {
    return rlSync.question(message);
  }
}

const noun = prompt("Enter a noun: ");
const verb = prompt("Enter a verb: ");
const adjective = prompt("Enter an adjective: ");
const adverb = prompt("Enter an adverb: ");

console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`);

/* 
Enter a noun: dog
Enter a verb: walk
Enter an adjective: blue
Enter an adverb: quickly

// console output
Do you walk your blue dog quickly? That's hilarious!
*/
