// A collection of spelling blocks has two letters per block, as shown in this
// list:

// B:O   X:K   D:Q   C:P   N:A
// G:T   R:E   F:S   J:W   H:U
// V:I   L:Y   Z:M
// This limits the words you can spell with the blocks to only those words that
// do not use both letters from any given block. You can also only use each
// block once.

// Write a function that takes a word string as an argument and returns true if
// the word can be spelled using the set of blocks, false otherwise. You can
// consider the letters to be case-insensitive when you apply the rules.

// INPUT: a string (word to be tested)
// OUTPUT: true/false
// CONSTANT: all the letter block info
// 
// RULES:
// - case insensitive
// - once a block has been taken from the "stack" both letters are no longer
//   available
// 
// QUESTIONS:
// - will the blocks always have only the 26 letters? (each letter once)?
// - can letters appear twice in the blocks?

// DATA STRUCTURE:
// - string (input)
// - constant: 2d array of character pairs [[chr, chr], [chr, chr]]
//

// Searches through tiles and returns the index of the tile where the letter is
// found or -1 if it is not found
//
function findLetter(letter, blocks) {
  for (let index = 0; index < blocks.length; index += 1) {
    let block = blocks[index];
    if (block[0] === letter || block[1] === letter) {
      return index;
    }
  }

  return -1;
}

// console.log(findLetter('B', blocks) === 0);
// console.log(findLetter('Z', blocks) === 12);
// console.log(findLetter('M', blocks) === 12);
// console.log(findLetter('K', blocks) === 1);
// console.log(findLetter('O', [['A', 'B'], ['C', 'D']]) === -1);

// ALGORITHM:
// - Instantiate the blocks 2d array
// - For each letter of the input string:
//   - check the block array to see which index block holds the current letter
//   - if the index is -1 return false
//   - otherwise, remove the block with the index from the blocks array
// - When the loop is finished return true

function isBlockWord(word) {
  let blocks = [ ['B', 'O'], ['X', 'K'], ['D', 'Q'], ['C', 'P'], ['N', 'A'], ['G', 'T'],
    ['R', 'E'], ['F', 'S'], ['J', 'W'], ['H', 'U'], ['V', 'I'], ['L', 'Y'], ['Z', 'M'] ];
  
  for (let c = 0; c < word.length; c += 1) {
    const blockIndex = findLetter(word[c].toUpperCase(), blocks);
    if (blockIndex === -1) {
      return false;
    }

    removeBlock(blocks, blockIndex);
  }

  return true;
}

function removeBlock(blocks, index) {
  return blocks.slice(0, index).concat(blocks.slice(index + 1));
}

// console.log(removeBlock([['A', 'B'], ['C', 'D'], ['E', 'F']], 0));
// console.log(removeBlock([['A', 'B'], ['C', 'D'], ['E', 'F']], 1));
// console.log(removeBlock([['A', 'B'], ['C', 'D'], ['E', 'F']], 2));


console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('jerk'));       // false
