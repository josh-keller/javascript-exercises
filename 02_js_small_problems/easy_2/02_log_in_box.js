function logInBox(message, maxBoxWidth) {
  const messageWidth = setMessageWidth(message.length, maxBoxWidth);

  const horizontalLine = '+' + ''.padEnd(messageWidth + 2, '-') + '+';
  const blankLine = '|' + ''.padEnd(messageWidth + 2, ' ') + '|';
  const textLines = wrapText(message, messageWidth);

  console.log(horizontalLine);
  console.log(blankLine);
  console.log(textLines.join('\n'));
  console.log(blankLine);
  console.log(horizontalLine);
}

// creates an array of strings with each line of wrapped text
function wrapText(message, messageWidth) {
  let wrappedTextLines = [];
  let messageHeight = Math.ceil(message.length / messageWidth) || 1;

  for (let i = 0; i < messageHeight; i += 1) {
    let start = i * messageWidth;
    let end = messageWidth * (i + 1);
    wrappedTextLines[i] = 
      '| ' + message.slice(start, end).padEnd(messageWidth, ' ') + ' |';
  }

  return wrappedTextLines
}

// returns messageWidth based on relationship of message length to maxBoxWidth
function setMessageWidth(messageLength, maxBoxWidth) {
  if (!maxBoxWidth || maxBoxWidth - 4 > messageLength) {
    return messageLength;
  } else {
    return maxBoxWidth - 4;
  }
}

console.log("Should output with no wrap, same width:");
logInBox('To boldly go where no one has gone before.');
logInBox('To boldly go where no one has gone before.', 46);
logInBox('To boldly go where no one has gone before.', 47);

console.log("\nShould output wrapped on two lines:");
logInBox('To boldly go where no one has gone before.', 45);
logInBox('To boldly go where no one has gone before.', 25);
logInBox('To boldly go where no one has gone before.', 26);

console.log("\nShould output wrapped on three lines:");
logInBox('To boldly go where no one has gone before.', 24);

console.log("\nThree lines tall inside box, different widths:");
logInBox('');
logInBox(' ');
