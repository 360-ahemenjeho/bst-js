import test from "node:test";
import assert from "node:assert/strict";
import { Tree } from "../src/tree.js";
import { prettyPrint } from "../src/lib/helpers.js";

test("builds a valid tree from an array", () => {
  const tree = new Tree([3, 1, 2]);
  assert.equal(tree.root?.data, 2);
  assert.equal(tree.root?.left?.data, 1);
  assert.equal(tree.root?.right?.data, 3);
});

test("inserts a new value correctly", () => {
  const tree = new Tree([3, 2, 1]);
  tree.insert(4);
  assert.equal(tree.root?.right?.right?.data, 4);
});

test("ignores duplicates", () => {
  const tree = new Tree([3, 2, 1, 3]);
  assert.equal(tree.root?.right?.left, null);
});

test("delete leaf node", () => {
  const tree = new Tree([2, 3, 1, 4]);
  tree.delete(1);
  const newTree = tree.root;
  assert.equal(newTree.left.left, null);
});

test("delete single child node", () => {
  const tree = new Tree([2, 3, 1, 4]);
  tree.delete(2);
  const newTree = tree.root;
  assert.equal(newTree.left.data, 1);
});

test("delete node with two child nodes (where successor is a leaf node)", () => {
  const tree = new Tree([2, 7, 8, 1, 3, 4, 6, 5]);
  tree.delete(5);
  const newTree = tree.root;
  assert.equal(newTree.data, 6);
  assert.equal(newTree.right.left, null);
});

test("find node of a given value (valid value))", () => {
  const tree = new Tree([2, 7, 8, 1, 3, 4, 6, 5]);
  const dataNode = tree.find(2);
  assert.equal(dataNode.right, null);
  assert.equal(dataNode.left.left, null);
  assert.equal(dataNode.left.right, null);
  assert.equal(dataNode.left.data, 1);
});

test("find node of a given value (invalid value))", () => {
  const tree = new Tree([2, 7, 8, 1, 3, 4, 6, 5]);
  const dataNode = tree.find(34);
  assert.equal(dataNode, null);
});

test("level order foreach", () => {
  const tree = new Tree([2, 7, 8, 1, 3, 4, 6, 5]);
  const result = [];
  tree.levelOrderForEach((node) => {
    result.push(node.data);
  });
  assert.equal(result.join(","), "5,3,7,2,4,6,8,1");
});

test("preorder foreach", () => {
  const tree = new Tree([2, 7, 8, 1, 3, 4, 6, 5]);
  const result = [];
  tree.preOrderForEach((node) => {
    result.push(node.data);
  });
  assert.equal(result.join(","), "5,3,2,1,4,7,6,8");
});

test("inorder foreach", () => {
  const tree = new Tree([2, 7, 8, 1, 3, 4, 6, 5]);
  const result = [];
  tree.inOrderForEach((node) => {
    result.push(node.data);
  });
  assert.equal(result.join(","), "1,2,3,4,5,6,7,8");
});
