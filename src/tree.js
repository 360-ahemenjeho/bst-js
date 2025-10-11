import { buildTree } from "./lib/helpers.js";

/**
 * Builds a balanced binary search tree (BST) from a sorted list of numbers. The function ensures that the resulting tree is as balanced as possible.
 *
 * @function buildTree
 * @param {number[]} list - A sorted array of numbers from which to build the tree.
 * @returns {Node|null} The root node of the constructed binary search tree.
 */

/**
 * Represents a single node in a binary search tree.
 */
export class Node {
  /**
   * Creates a new node with the specified data.
   *
   * @constructor
   * @param {number} data - The numeric value to store in this node.
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
 * Represents a binary search tree (BST). Provides methods for inserting, deleting, and managing nodes.
 */
export class Tree {
  /**
   * Creates a binary search tree from an initial list of values.
   *
   * @constructor
   * @param {number[]} list - The initial list of numeric values to populate the tree. The list may be unsorted; `buildTree` will handle balancing.
   */
  constructor(list) {
    /** @type {Node|null} The root node of the binary search tree. */
    this.root = buildTree(list);
  }

  /**
   * Inserts a new value into the binary search tree.
   *
   * - If the value already exists in the tree, no new node is added.
   * - The insertion maintains the binary search tree property.
   *
   * @param {number} data - The numeric value to insert into the tree.
   * @returns {void}
   */
  insert(data) {
    /**
     * Recursively inserts a new value into the correct position in the tree.
     *
     * @private
     * @param {Node|null} node - The current node being examined.
     * @param {number} data - The value to insert.
     * @returns {Node} The updated node after insertion.
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

    const newRoot = _insertRecursive(this.root, data);
    this.root = newRoot;
  }

  /**
   * Deletes a node containing the specified value from the binary search tree.
   *
   * - If the value does not exist in the tree, the tree remains unchanged.
   * - The method ensures that the binary search tree structure remains valid after deletion.
   *
   * @param {number} data - The value of the node to delete.
   * @returns {void}
   */
  delete(data) {
    /** @type {Node} */
    let previous;
    /**
     * Recursively deletes a node with the given value.
     *
     * - If the node has no children, it is simply removed.
     * - If the node has one child, it is replaced by that child.
     * - If the node has two children, it is replaced with its in-order successor (the smallest value in the right subtree).
     *
     * @private
     * @param {Node|null} node - The current node being examined.
     * @param {number} data - The value to delete.
     * @returns {Node} The updated node after deletion.
     */
    function _deleteRecursive(node, data) {
      if (node === null) {
        return node;
      }

      if (data < node.data) {
        node.left = _deleteRecursive(node.left, data);
      } else if (data > node.data) {
        node.right = _deleteRecursive(node.right, data);
      } else if (data === node.data) {
        if (node.left === null && node.right === null) {
          return null;
        }
      }

      return node;
    }

    const newRoot = _deleteRecursive(this.root, data);
    this.root = newRoot;
  }
}
