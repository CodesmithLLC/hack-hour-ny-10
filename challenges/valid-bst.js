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
    const arr = [];
    BST(tree, arr);
    for(let i = 0; i < arr.length - 1; i++) {
        if(arr[i+1] < arr[i]) return false;
    } return true;
}

function BST(tree, arr) {
    if(tree.left !== null) BST(tree.left, arr);
    arr.push(tree.value);
    if(tree.right !== null) BST(tree.right, arr);
}

// const bt = new BinaryTree(5);
// bt.left = new BinaryTree(3);
// bt.right = new BinaryTree(7);
// bt.left.left = new BinaryTree(2);
// bt.left.right = new BinaryTree(4);
// bt.right.left = new BinaryTree(6);
// bt.right.right = new BinaryTree(8);
// bt.right.right.right = new BinaryTree(7);
// console.log(validBST(bt));

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
