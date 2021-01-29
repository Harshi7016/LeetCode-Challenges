var verticalTraversal = function (root) {
  const result = [];
  getResultNode(root, 0, 0);
  result.sort((a, b) => a[0] - b[0] || b[1] - a[1] || a[2] - b[2]);
  let map = new Map();
  for (const [x, y, val] of result) {
    if (!map.has(x)) map.set(x, []);
    map.get(x).push(val);
  }

  return [...map.values];

  function getResultNode(node, x, y) {
    if (node) {
      getResultNode(node.left, x - 1, y - 1);
      result.push([x, y, node.val]);
      getResultNode(node.rigth, x + 1, y - 1);
    }
  }
};

verticalTraversal([12, 23]);
