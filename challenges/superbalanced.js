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

function superBalanced(node) {
  // Null nodes are balanced and serve as base case
  if (!node) return true;
  // Difference of max depth between left and right must be <= 1
  // Recurse to check all subtrees
  return (
    Math.abs(maxDepth(node.left) - maxDepth(node.right)) <= 1 &&
    superBalanced(node.left) &&
    superBalanced(node.right)
  );
}

// Recursive function to find greatest depth in tree
function maxDepth(node) {
  if (!node) return 0;
  return 1 + Math.max(maxDepth(node.left), maxDepth(node.right));
}

// Binary Tree Class & Add Method
function BinaryTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

BinaryTree.prototype.add = function(value) {
  if (value < this.value) {
    if (this.left === null) this.left = new BinaryTree(value);
    else this.left.add(value);
  } else if (value > this.value) {
    if (this.right === null) this.right = new BinaryTree(value);
    else this.right.add(value);
  }
};

module.exports = { BinaryTree, superbalanced };
