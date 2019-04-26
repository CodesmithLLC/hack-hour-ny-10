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
  let pointer1 = head;
  let pointer2 = head.next;
  head.next = null;
  while (pointer2) {
    head = pointer2;
    pointer2 = head.next;
    head.next = pointer1;
    pointer1 = head;
  }
  return head;
}

module.exports = { Node, reverseLinkedList };
