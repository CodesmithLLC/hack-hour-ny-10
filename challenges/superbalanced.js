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

function superbalanced(tree) {
  if(tree === null) return true;
  const left = findHeight(tree.left);
  const right = findHeight(tree.right);
  console.log(left, right);
  return (Math.abs(right-left) <= 1);
}
function findHeight(tree, n = 1) {
  if(tree === null) return n;
  return Math.max(findHeight(tree.left, n+1), findHeight(tree.right, n+1));
}

// const root = new BinaryTree(10);
// root.right = new BinaryTree(15);
// root.right.left = new BinaryTree(12);
// root.right.right = new BinaryTree(17);
// root.left = new BinaryTree(5);
// root.left.left = new BinaryTree(5);
// root.left.left.left = new BinaryTree(5);
// root.left.left.left.left = new BinaryTree(5)

// console.log(superbalanced(root));

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
