"use strict";
// You have a bank of switches before you, numbered from 1 to n. Every switch is
// connected to exactly one light that is initially off. You walk down the row
// of switches and toggle every one of them. You walk back to the beginning of
// the row and start another pass. On this second pass, you toggle switches 2,
// 4, 6, and so on. On the third pass, you go back to the beginning again, this
// time toggling switches 3, 6, 9, and so on. You continue to repeat this
// process until you have gone through n repetitions.

// Write a program that takes one argument—the total number of switches—and
// returns an array of the lights that are on after n repetitions.

// INPUT: number of lights
// OUTPUT: an array of number (representing which lights are left on)
// RULES:
//  - switches numbered from 1 to n
//  - all lights begin 'off'
//  - toggle all the switches, then every other, then every 3rd, so on up to n
// 
// DATA STRUCTURE: Array (object with numeric keys)
//
// ALGORITHM:
//  - initialize an array `numbers` that holds keys from 1 to n (size is n + 1)
//  - initialize all values to false
//  - for each number 'skips' from 1 to n:
//    * iterate through the array, beginning with index 'skips', and adding
//    'skips' to the index each time:
//      - flip the element
//  - create a new array of numbers corresponding to the indexes in the array
//  where the value is true
//  - return that array

function lightsOn(numOfSwitches) {
  const switches = Array.from({ length: numOfSwitches + 1 }, () => false);

  for (let n = 1; n <= numOfSwitches; n += 1) {
    toggleEveryNthSwitch(switches, n);
  }

  return whichLightsAreOn(switches);
}

function whichLightsAreOn(switches) {
  let onSwitches = [];

  for (let i = 1; i < switches.length; i += 1) {
    if (switches[i]) {
      onSwitches.push(i);
    }
  }

  return onSwitches;
}

function toggleEveryNthSwitch(switches, n) {
  for (let current = n; current < switches.length; current += n) {
    switches[current] = !switches[current];
  }
}

console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
//  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// 0 F  F  F  F  F  F  F  F  F  F
// 1 T  T  T  T  T  T  T  T  T  T
// 2 T  F  T  F  T  F  T  F  T  F
// 3 T  F  F  F  T  T  T  F  F  F
// 4 T  F  F  T  T  T  T  T  F  F
// 5 T  F  F  T  F  T  T  T  F  T
// 6 T  F  F  T  F  F  T  T  F  T
// 7 T  F  F  T  F  F  F  T  F  T
// 8 T  F  F  T  F  F  F  F  F  T
// 9 T  F  F  T  F  F  F  F  T  T
//10 T  F  F  T  F  F  F  F  T  F
