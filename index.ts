class Node {
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

function buildTree(list: number[] = []): Node | null {
  if (!Array.isArray(list) || list.length === 0) return null;

  const set = new Set(list);
  const sorted = [...set].sort((a, b) => a - b);

  function build(sortedArr: number[]): Node | null {
    if (sortedArr.length === 0) return null;

    const mid: number = Math.floor(sortedArr.length / 2);
    const node = new Node(sortedArr[mid]!);

    node.left = build(sortedArr.slice(0, mid));
    node.right = build(sortedArr.slice(mid + 1));

    return node;
  }

  return build(sorted);
}

export function prettyPrint(
  node: Node | null,
  prefix: string = "",
  isLeft: boolean = true
): void {
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
