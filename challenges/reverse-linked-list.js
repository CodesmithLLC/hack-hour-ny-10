/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

 //not complete

function Node(value) {
    this.value = value;
    this.next = null;
}

function reverseLinkedList(head) {
    let prevPointer = null;
    let nextPointer = null;
    let currPointer = head;

    console.log(head)

    while (currPointer) {
        nextPointer = head.next;
        currPointer.next = prevPointer;
        prevPointer = currPointer;
        currPointer = nextPointer;
        //console.log(currPointer)
    }
    head = prevPointer;
    console.log(head)
    return head;
}

//create linked list 1 -> 2 -> 3 -> null
let n3 = new Node(3);
let n2 = new Node(2);
n2.next = n3;
let n1 = new Node(1);
n1.next = n2;
let l1 = n1;    //head pointer
console.log(l1)
console.log(reverseLinkedList(l1))

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
