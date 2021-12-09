let rlSync = require("readline-sync");

function convertToSecondaryUnit(primaryArea, primaryUnits) {
  const SQFEET_PER_SQMETERS = 10.7639;

  if (primaryUnits === 'meters') {
    return primaryArea * SQFEET_PER_SQMETERS;
  } else {
    return primaryArea / SQFEET_PER_SQMETERS;
  }
}
const unitPrompt = 'Which snits would you like to use? f = Feet, m = Meters: ';
const positiveNumMessage = 'Please enter a positive number.';

rlSync.setDefaultOptions({limit: ['f', 'm'],
                          caseSensitive: false,
                          limitMessage: "Please enter 'f' or 'm'."});

let input = rlSync.question(unitPrompt).toLowerCase();
let primaryUnits = (input === 'f') ? 'feet' : 'meters';
let secondaryUnits = (input === 'f') ? 'meters' : 'feet';
const lengthPrompt = `Enter the length of the room in ${primaryUnits}:\n`;
const widthPrompt = `Enter the width of the room in ${primaryUnits}:\n`;

rlSync.setDefaultOptions({limit: function(input) { return Number(input) > 0; },
                          limitMessage: positiveNumMessage});

let length = parseFloat(rlSync.question(lengthPrompt));
let width = parseFloat(rlSync.question(widthPrompt));

let primaryArea = length * width;
let secondaryArea = convertToSecondaryUnit(primaryArea, primaryUnits);

const finalAnswerMessage = 
  `The area of the room is ${primaryArea.toFixed(2)} square ${primaryUnits}. ` +
  `(${secondaryArea.toFixed(2)} square ${secondaryUnits}).`;

console.log(finalAnswerMessage);

