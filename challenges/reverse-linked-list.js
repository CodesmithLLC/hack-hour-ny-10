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
  //get the length, then repeat a swapping process n-1 times. quadratic time complexity
  if (!head) return undefined;
  if (!head.next) return head;
  let count = 2;
  let tail = head.next;
  while (tail) {
    if (!tail.next) break;
    tail = tail.next;
    count++;
  }
  let diff = 1;
  let slow = head;
  let fast = tail;
  while (diff < count) {
    diff++;
  }
  return slow;
}

module.exports = { Node: Node, reverseLinkedList: reverseLinkedList };
