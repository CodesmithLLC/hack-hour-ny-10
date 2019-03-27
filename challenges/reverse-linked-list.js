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
  if (!head) return null;
  
  let tail = new Node(head.value);

  while (head.next) {
    const node = new Node(head.next.value);
    node.next = tail;
    tail = node;
    head = head.next;
  }

  return tail;
}

function reverseLinkedListInPlace(head) {
  if (!head) return null;
  if (!head.next) return head;
  let rest = head.next;
  return reverseLinkedListInPlace(rest).next = head;
}

const node = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);

node.next = node2;
node2.next = node3;
node3.next = node4;


const reversed = reverseLinkedListInPlace(node);
console.log(reversed)
module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
