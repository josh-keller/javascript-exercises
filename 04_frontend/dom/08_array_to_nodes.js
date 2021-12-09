function arrayToNodes(nodes) {
  let elem = document.createElement(nodes[0]);
  let children = nodes[1].map(child => arrayToNodes(child));

  children.forEach(child => elem.appendChild(child));

  return elem;
}

// Nested array of nodes
const nodes = ["BODY",[["HEADER",[]],["MAIN",[]],["FOOTER",[]]]];

// OR
//
// ["BODY", [
//   ["HEADER", []],
//   ["MAIN", []],
//   ["FOOTER", []]]]

arrayToNodes(nodes);


