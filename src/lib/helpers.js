import { Node } from "../tree.js";

/**
 * Builds a balanced binary search tree (BST) from a list of numbers.
 *
 * @param {number[]} [list=[]] - The list of numbers to build the tree from.
 * @returns {Node|null} The root node of the constructed binary search tree, or null if the list is empty or invalid.
 */
export function buildTree(list = []) {
  if (!Array.isArray(list) || list.length === 0) return null;

  const set = new Set(list);
  const sorted = [...set].sort((a, b) => a - b);

  /**
   * Recursively builds a balanced BST from a sorted array.
   *
   * @param {number[]} sortedArr - The sorted array of numbers.
   * @returns {Node|null} The root node of the subtree.
   */
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

/**
 * Prints a visual representation of the binary tree to the console.
 *
 * @param {Node|null} node - The current node to print.
 * @param {string} [prefix=""] - The prefix used for formatting tree branches.
 * @param {boolean} [isLeft=true] - Whether the current node is a left child.
 * @returns {void}
 */
export function prettyPrint(node, prefix = "", isLeft = true) {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
}
