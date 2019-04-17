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

function superbalanced(tree, depth = 0, maxDepth = 0, minDepth = 0) {
  return Math.abs(minDepth(tree) - maxDepth(tree)) <= 1;

  function minDepth(tree, depth = 0) {
    if (!tree) {
      return depth;
    }
    return Math.min(minDepth(tree.left, depth + 1), minDepth(tree.right, depth + 1));
  }

  function maxDepth(tree, depth = 0) {
    if (!tree) {
      return depth;
    }
    return Math.max(maxDepth(tree.left, depth + 1), maxDepth(tree.right, depth + 1));
  }
}

module.exports = { BinaryTree: BinaryTree, superbalanced: superbalanced };
