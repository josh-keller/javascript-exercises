function elementChildren(node) {
  return Array.prototype.filter.call(node, child => {
    return child.nodeType === Node.ELEMENT_NODE;
  }
}

nodesToArr = (function () {
  function singleNodeToArr(node) {
    if (node.childElementCount === 0) {
      return [node, []];
    }

    const childArrs = elementChildren(node).map(child => {
      singleNodeToArr(child);
    });

    return [node, childArrs];
  }

  return function nodesToArr() {
    singleNodeToArr(document.body);
  }
}());
