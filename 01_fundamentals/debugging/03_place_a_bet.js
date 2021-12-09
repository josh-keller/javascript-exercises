function getPrompt() {
  let rlSync = require("readline-sync");

  return rlSync.question;
}

function getAlert() {
  return console.log;
}

const prompt = getPrompt();
const alert = getAlert();

function placeABet(guess) {
  const generateRandomInt = function generateRandomInt() {
    return Math.floor(Math.random() * 25) + 1;
  };

  const winningNumber = generateRandomInt();

  if (guess < 1 || guess > 25) {
    return 'Invalid guess. Valid guesses are between 1 and 25.';
  }

  if (guess === winningNumber) {
    return "Congratulations, you win!";
  } else {
    return "Wrong-o! You lose.";
  }
}

const userGuess = parseInt(prompt('Input a guess between 1-25 '), 10);
alert(placeABet(userGuess));

// Here we see the difference between a function statement and a function
// expression. The `generateRandomInt` function is defined on `lines 15-17`.
// It's definition looks like a function statement which would be automatically
// declare a variable of the same name as a function and assign the function to
// the variable. However, in order for this to be a function statement, the
// first token needs to be `function`. In this case the statement is wrapped in
// parentheses, making the entire thing a function expression instead.
//
// Function expressions do not declare a variable automatically. They define the
// function which can then be assigned to a variable or invoked immediately. But
// in this case, we do neither. The function expression is not assigned and so
// it is lost after it is created. Thus, we get an error: `getRandomInt` is not
// defined.
//
// We can solve this in a few ways: perhaps the easiest is that we can just
// remove the surrounding parentheses. We can also declare a variable
// `getRandomInt` and assign the entire expression to it. Finally, since this
// function is called only once, we could get rid of the later method invocation
// and simply invoke this immediately, assigning the return value to
// `winningNumber`.
