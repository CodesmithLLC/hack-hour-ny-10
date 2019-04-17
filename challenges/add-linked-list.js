/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (2 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 7 -> 0 -> 8
 *
 * The 7 is the ones digit (2 + 5).
 * The 0 is the tens digit (1 + 9, carry the 1).
 * The 8 is the hundreds digit (1 carried over + 5 + 2).
 *
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function addLinkedList(l1, l2) {
  const dummy = new Node(0);
  let head = new Node(0);
  let tail = new Node(0);
  dummy.next = head;
  let carry = 0;
  while (l1 || l2) {
    tail = new Node(0);
    let l1Val = l1 ? l1.value : 0;
    let l2Val = l2 ? l2.value : 0;

    head.value = (l1Val + l2Val + carry) % 10;
    head.next = tail;
    head = tail;

    carry = l1Val + l2Val + carry > 9 ? 1 : 0;
    l1 = l1 ? l1.next : l1;
    l2 = l2 ? l2.next : l2;
  }
  if (carry) tail.next = new Node(1);
  return dummy.next;
}

module.exports = { Node: Node, addLinkedList: addLinkedList };
