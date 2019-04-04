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
    if (!tree.value || !tree.left || !tree.right) return true;
    if ((tree.value > tree.right.value) || (tree.value < tree.left.value)) return false;
    return validBST(tree.left) && validBST(tree.right);
}

// const one = new BinaryTree(5);
// const two = one.left = new BinaryTree(7);
// const three = one.right = new BinaryTree(6);

// console.log(validBST(one))


module.exports = {BinaryTree: BinaryTree, validBST: validBST};
