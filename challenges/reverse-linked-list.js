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
  const list = [];
  const newList = [];
  let currentNode = head;
  while (currentNode) {
    list.push(currentNode);
    currentNode = currentNode.next;
  }
  for (let i = list.length - 1; i >= 1; i -= 1) {
    newList.push((list[i].next = list[i - 1]));
  }
  return newList[0];
}

module.exports = { Node, reverseLinkedList };
