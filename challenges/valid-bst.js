/* You are given a tree. Write a function to check if it is a valid binary search tree. A tree is
 * a valid binary search tree if it satisfies the following constraints:
 *      at any given node, the value of all the nodes in its left tree must be < its value
 *      at any given node, the value of all the nodes in its right tree must be > its value
 * Assume that each value in the tree is unique.
 */

function BinaryTree(val) {
  this.value = val;
  this.left = null;
  this.right = null;
}

function validBST(tree) {
  let left = true;
  let right = true;
  if (tree === null) return true;
  if (tree.left) {
    left = tree.left.value > tree.value ? false : validBST(tree.left);
  }
  if (tree.right) {
    right = tree.right.value < tree.value ? false : validBST(tree.right);
  }
  return left && right;
}

module.exports = { BinaryTree: BinaryTree, validBST: validBST };
