/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function Node(value) {
    this.value = value;
    this.next = null;
}

function reverseLinkedList(head) {
    let rev = null;
    let curr = head;
    let temp = null;
    while(curr !== null) {
        temp = curr.next;
        curr.next = rev;
        rev = curr;
        curr = temp;
    } return rev;
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
