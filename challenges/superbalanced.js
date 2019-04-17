/**
 * Write a function to see if a binary tree "superbalanced".
 * An empty tree is balanced. A non-empty binary tree T is balanced if:
1) Left subtree of T is balanced
2) Right subtree of T is balanced
3) The difference between heights of left subtree and right subtree is not more than 1.
example: http://www.geeksforgeeks.org/wp-content/uploads/balanced_tree.GIF
 */

function BinaryTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function findHeight(tree) {
  if (!tree) return 0;
  return Math.max(findHeight(tree.left), findHeight(tree.right)) + 1;
}

function superbalanced(tree) {
  if (!tree) return true;

  return (
    Math.abs(findHeight(tree.left) - findHeight(tree.right) <= 1) &&
    superbalanced(tree.left) &&
    superbalanced(tree.right)
  );
}

// const Tree = {
//   value: 1,
//   left: { value: 2, left: 3, right: 4 },
//   right: { value: 5, left: 6, right: { value: 7, left: 8, right: null } }
// };

// const tree2 = {
//   value: 1,
//   left: null,
//   right: null
// };

// console.log(superbalanced(tree2));
// console.log(superbalanced(Tree));
// console.log(findHeight(tree2));
// console.log(findHeight(Tree));

module.exports = { BinaryTree: BinaryTree, superbalanced: superbalanced };
