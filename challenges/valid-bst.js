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
  return isBST(tree, (min = -Infinity), (max = Infinity));

  function isBST(tree, min, max) {
    if (!tree) return true;

    if (tree.value <= min || tree.value >= max) return false;

    return (
      isBST(tree.left, min, tree.value) && isBST(tree.right, tree.value, max)
    );
  }
}

// inorder traversal, inefficient!
// function validBST(tree) {
//   const values = [];
//   // inorder traversal
//   function traverse(root){
//     if (!root) return;
//     if (root.left) traverse(root.left);
//     values.push(root.value);
//     if (root.right) traverse(root.right);
//   }
//   traverse(tree);
//   for (let i = 0; i < values.length; i += 1){
//     if (values[i] >= values[i + 1]) return false;
//   }
//   return true;
// }

// efficient
// function validBST(
//   root,
//   min = Number.NEGATIVE_INFINITY,
//   max = Number.POSITIVE_INFINITY
// ) {
//   if (!root) return true;
//   if (root.value <= min || root.value >= max) return false;
//   return (
//     validBST(root.left, min, root.value) &&
//     validBST(root.right, root.value, max)
//   );
// }

// const bt = new BinaryTree(10);
// bt.left = new BinaryTree(8);
// bt.right = new BinaryTree(12);
// bt.left.left = 6;
// bt.left.right = 9;
// bt.right.left = 11;
// bt.right.right = 13;

// console.log(JSON.stringify(bt, null, 4));
// console.log(bt);
// console.log(validBST(bt));

module.exports = { BinaryTree: BinaryTree, validBST: validBST };
