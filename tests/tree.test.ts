import test from "node:test";
import assert from "node:assert/strict";
import { Tree } from "../src/tree.ts";

test("builds a valid tree from an array", () => {
  const tree = new Tree([3, 1, 2]);
  assert.equal(tree.root?.data, 2);
  assert.equal(tree.root?.left?.data, 1);
  assert.equal(tree.root?.right?.data, 3);
});

test("inserts a new value correctly", () => {
  const tree = new Tree([3, 2, 1]);
  tree.insert(tree.root, 4);
  assert.equal(tree.root?.right?.data, 4);
});

test("ignores duplicates", () => {
  const tree = new Tree([3, 2, 1, 3]);
  assert.equal(tree.root?.right, null);
});
