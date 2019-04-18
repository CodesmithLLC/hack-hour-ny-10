/**
 * Write a function to see if a binary tree "superbalanced".
 * An empty tree is balanced. A non-empty binary tree T is balanced if:
1) Left subtree of T is balanced
2) Right subtree of T is balanced
3) The difference between heights of left subtree and right subtree is not more than 1.
example: http://www.geeksforgeeks.org/wp-content/uploads/balanced_tree.GIF
 */


 // not complete


function BinaryTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function superbalanced(tree) {
  //base case
  if (tree === null) return true

  if (getHeight(tree) === -1) {
    return false
  } else {
    return getHeight(tree.left) && getHeight(tree.right)
  }
}

function getHeight(tree) {
  //base case
  if (tree === null) return 0

  let leftHeight = getHeight(tree.left);
  let rightHeight = getHeight(tree.right);
  let heightDiff = leftHeight - rightHeight;
  if(Math.abs(heightDiff) > 1) { 
    return -1;
  } else {
    return Math.max(leftHeight, rightHeight) + 1;
  }
}

const treeT = new BinaryTree(12);
treeT.left = new BinaryTree(4);
treeT.left.left = new BinaryTree(2);
treeT.left.right = new BinaryTree(9);
treeT.left.right.left = new BinaryTree(6)
treeT.right = new BinaryTree(18);
treeT.right.left = new BinaryTree(13);
treeT.right.right = new BinaryTree(21);

//console.log(treeT)


console.log(superbalanced(treeT))

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
