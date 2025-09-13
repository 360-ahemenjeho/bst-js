class Node {
  left = null;
  right = null;
  data = null;

  constructor(data) {
    this.data = data;
  }
}

class Tree {
  constructor(list) {
    this.root = buildTree(list);
  }
}

function buildTree(list = []) {
  if (!Array.isArray(list) || list.length === 0) return;
  const set = new Set(list);
  const sorted = [...set].sort((a, b) => a - b);
  function build(sortedArr) {
    if (sortedArr.length === 0) return null;
    const mid = Math.floor(sortedArr.length / 2);
    const node = new Node(sortedArr[mid]);
    node.left = build(sortedArr.slice(0, mid));
    node.right = build(sortedArr.slice(mid + 1));
    return node;
  }
  return build(sorted);
}

const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
console.log("root -> ", tree.root);
