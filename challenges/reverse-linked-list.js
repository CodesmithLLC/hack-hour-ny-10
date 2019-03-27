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

// function reverseLinkedList(head) {
//     let prev = null;
//     let next = null;
//     let curr = head;
//     while(curr){
//         next = curr.next;
//         curr.next = prev;
//         prev = curr;
//         curr = next;
//     }
//     curr = prev;
//     return curr;
// }

function reverseLinkedList(head, tail = null) {
    if (!head) return tail;
    let next = head.next;
    head.next = tail;
    tail = head;
    return reverseLinkedList(next, tail);
}
// var node1 = new Node('1');
// var node2 = node1.next = new Node('2');
// var node3 = node2.next = new Node('3');
// var node4 = node3.next = new Node('4');
// var node5 = node4.next = new Node('5');

// console.log(reverseLinkedList(node1));

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
