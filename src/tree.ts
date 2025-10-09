import { buildTree } from "./lib/helpers.ts";

export class Node {
  left: Node | null = null;
  right: Node | null = null;
  data: number;

  constructor(data: number) {
    this.data = data;
  }
}

export class Tree {
  root: Node | null;

  constructor(list: number[]) {
    this.root = buildTree(list);
  }

  insert(root: Node | null, data: number): void {
    function insertRoot(root: Node | null, data: number): Node {
      if (root === null) {
        return new Node(data);
      }

      if (data === root.data) {
        return root;
      }

      if (data < root.data) {
        root.left = insertRoot(root.left, data);
      } else if (data > root.data) {
        root.right = insertRoot(root.right, data);
      }

      return root;
    }

    const result = insertRoot(root, data);
    this.root = result;
  }
}
