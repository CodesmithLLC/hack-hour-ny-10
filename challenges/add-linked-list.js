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
  let c1 = l1;
  let c2 = l2;
  const result = new Node(0);
  let r = result;
  let carry = 0;
  while(c1 !== null || c2 !== null) {
    let val = 0;
    if(c1 !== null && c2 !== null) {
      val = c1.value + c2.value + carry;
      c1 = c1.next; c2 = c2.next;
    } else if(c1 !== null && c2 === null) {
      val = c1.value + carry;
      c1 = c1.next;
    } else {
      val = c2.value + carry;
      c2 = c2.next;
    }
    const rem = (val > 9) ? val%10 : val;
    carry = (val > 9) ? Math.floor(val/10) : 0;
    r.next = new Node(rem);
    r = r.next;
  }
  if(carry !== 0) r.next = new Node(carry);
  return result.next;
}

// const c = new Node(2);
// c.next = new Node(1);
// c.next.next = new Node(9);
// c.next.next.next = new Node(9);
// const t = new Node(5);
// t.next = new Node(9);
// t.next.next = new Node(2);
// console.log(addLinkedList(c, t));

module.exports = {Node: Node, addLinkedList: addLinkedList};
