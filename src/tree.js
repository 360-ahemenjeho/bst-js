import { buildTree } from "./lib/helpers.js";

/**
 * Represents a node in a binary search tree.
 */
export class Node {
  /**
   * @param {number} data - The value stored in the node.
   */
  constructor(data) {
    /** @type {Node|null} */
    this.left = null;

    /** @type {Node|null} */
    this.right = null;

    /** @type {number} */
    this.data = data;
  }
}

/**
 * Represents a binary search tree.
 */
export class Tree {
  /**
   * @param {number[]} list - The initial list of values to build the tree.
   */
  constructor(list) {
    /** @type {Node|null} */
    this.root = buildTree(list);
  }

  /**
   * Inserts a new value into the tree.
   * @param {number} data - The value to insert.
   * @returns {void}
   */
  insert(data) {
    /**
     * Recursively inserts a new value into the correct position in the tree.
     * @private
     * @param {Node|null} node - The current node being examined.
     * @param {number} data - The value to insert.
     * @returns {Node} - The updated node.
     */
    function _insertRecursive(node, data) {
      if (node === null) {
        return new Node(data);
      }

      if (data === node.data) {
        return node;
      }

      if (data < node.data) {
        node.left = _insertRecursive(node.left, data);
      } else if (data > node.data) {
        node.right = _insertRecursive(node.right, data);
      }

      return node;
    }

    const result = _insertRecursive(this.root, data);
    this.root = result;
  }
}
