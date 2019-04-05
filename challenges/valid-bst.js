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
  let array = flattenBST(tree)

  for (let i = 1; i < array.length; i += 1) {
    if (array[i] < array[i-1]) return false
  }
  return true
}


function flattenBST(tree, array=[]) {
  if (!tree) return
  if (tree.left) array = flattenBST(tree.left, array)
  array = array.concat(tree.value)
  if (tree.right) array = flattenBST(tree.right, array);
  return array
}


module.exports = { BinaryTree: BinaryTree, validBST: validBST };
