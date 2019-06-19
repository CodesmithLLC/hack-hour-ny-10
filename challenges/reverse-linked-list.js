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
  let curr = head;
  let prev = null;
  let next = null;

  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}

function reverseLinkedListRecursive(head) {
  if (!head.next) return head;

  const newStart = reverseLinkedListRecursive(head.next);

  head.next.next = head;
  // this ensures that the tail of the reversed linked list points at null
  head.next = null;

  return newStart;
}

module.exports = { Node, reverseLinkedList };
