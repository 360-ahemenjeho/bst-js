import { prettyPrint, Tree } from "./index.ts";
// Example usage
// const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
const treeTwo = new Tree([3, 2, 1]);

console.log("root", treeTwo.root);
prettyPrint(treeTwo.root);

treeTwo.insert(treeTwo.root, 4);
console.log("root", treeTwo.root);
prettyPrint(treeTwo.root);
