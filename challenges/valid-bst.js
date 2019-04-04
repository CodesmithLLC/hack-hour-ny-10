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
    //base cases for true and false
    if(tree.left === null && tree.right === null) return true;
    if (tree.left.value > tree.value || tree.right.value < tree.right)return false;
    //recursive cases to get to null
    if (tree.left === null) return validBST(tree.right);
    if (tree.right === null) return validBST(tree.left);
    return (validBST(tree.left) && validBST(tree.right));

}

const bt10 = new BinaryTree(10);
const bt7 = new BinaryTree(7);
const bt12 = new BinaryTree(12);
bt10.left = bt7;
bt10.right = bt12;

const bt6 = new BinaryTree(6);
const bt8 = new BinaryTree(8);
bt7.left = bt6;
bt7.right = bt8;

const bt11 = new BinaryTree(11);
const bt13 = new BinaryTree(13);
bt12.left = bt11;
bt12.right = bt13;




console.log(bt10)

console.log(validBST(bt10))

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
