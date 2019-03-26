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
  if (head.next === null || head === null) return head;
  if (head.next.next === null) {
    let newHead = head.next;
    newHead.next = head;
    head.next = null;
    return newHead;
  }
  let tempHead = reverseLinkedList(head.next);
  head.next = null;
  let curHead = tempHead;
  while (curHead.next !== null) {
    curHead = curHead.next;
  }
  curHead.next = head;
  return tempHead;
}

module.exports = { Node: Node, reverseLinkedList: reverseLinkedList };
