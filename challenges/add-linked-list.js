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
  if (!l1 && !l2) return undefined;
  if (!l1) return l2;
  if (!l2) return l1;
  let carry = 0;
  let head = l1;

  // add the cases where both exist
  while (l1 !== null && l2 !== null) {
    // console.log(l1.value, l2.value, carry);
    let newVal = l1.value + l2.value + carry;
    if (newVal >= 10) {
      carry = Math.floor(newVal / 10);
      newVal = newVal % 10;
    } else {
      carry = 0;
    }
    l1.value = newVal;
    if (l1.next !== null && l2.next !== null) {
      l1 = l1.next;
      l2 = l2.next;
    } else {
      break;
    }
  }

  // if l1 ends, but l2 continues
  if (l1.next === null && l2.next !== null) {
    // set l1 next to l2's next
    l1.next = l2.next;
    l1 = l1.next;
    while (l1 !== null) {
      let newVal = l1.value + carry;
      if (newVal >= 10) {
        carry = Math.floor(newVal / 10);
        newVal = newVal % 10;
      } else {
        carry = 0;
      }
      l1.value = newVal;
      if (l1.next === null) {
        break;
      }
      l1 = l1.next;
    }
  } else if (l2.next === null && l1.next !== null) {
    l1 = l1.next;

    while (l1 !== null) {
      let newVal = l1.value + carry;
      if (newVal >= 10) {
        carry = Math.floor(newVal / 10);
        newVal = newVal % 10;
      } else {
        carry = 0;
      }
      l1.value = newVal;
      if (l1.next === null) {
        break;
      }
      l1 = l1.next;
    }
  }
  if (carry) {
    let newNode = new Node(carry);
    l1.next = newNode;
  }

  return head;
}


module.exports = { Node: Node, addLinkedList: addLinkedList };
