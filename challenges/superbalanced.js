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

BinaryTree.prototype.height = function() {
  let current = this;
  let height = 0;
  let holdingQueue = [current];
  let gatherQueue = [];
  while (true) {
    holdingQueue.shift()
    if (current.left) {
      gatherQueue.push(current.left);
    }
    if (current.right) {
      gatherQueue.push(current.right)
    };
    if (!holdingQueue.length) {
      if (!gatherQueue.length) return height
      holdingQueue.push(...gatherQueue);
      gatherQueue.length = 0;
      height++;
    }   
    current = holdingQueue[0];
  }
};

function superbalanced(tree) {
  if (!tree.left && !tree.right) return true;
  let rHeight = tree.right.height();
  let lHeight = tree.left.height();
  if ((lHeight >= rHeight + 2) || (lHeight + 2 <= rHeight)){
    return false;
  }
  else {
    return (superbalanced(tree.left) && superbalanced(tree.right));
  }
}

// let a = new BinaryTree(15);
// let b = a.left = new BinaryTree(8);
// let c = a.right = new BinaryTree(22);
// let d = c.right = new BinaryTree(17);
// let e = c.left = new BinaryTree(27);
// let f = d.left = new BinaryTree(16);
// let g = d.right = new BinaryTree(19);


// console.log(superbalanced(a));

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
