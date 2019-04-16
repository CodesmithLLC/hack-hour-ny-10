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
  let currPointer = head;
  let headPointer = head;
  let tailPointer;
  

  //   this.current = head;
  //   while (this.current.next !== null) {
  //     this.current = this.current.next;
  //   }
  //   return this.current;
}

module.exports = { Node: Node, reverseLinkedList: reverseLinkedList };
