/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A');
 * const b = new Node('B');
 * const c = new Node('C');
 * const d = new Node('D');
 * const e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

// Solution I: linear time & space complexity
function kthToLastNode(k, head) {
  if (k <= 0) {
    return undefined;
  }
  const arrayOfVals = [];
  let current = head;

  while (current) {
    arrayOfVals.push(current.value);
    current = current.next;
  }

  return arrayOfVals[arrayOfVals.length - k];
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(kthToLastNode(2, a));


// // Solution II: linear time, constant space complexity
// function kthToLastNode(k, head) {
//   let lead = head;
//   let leadIndex = 0;
//   while (leadIndex < k && lead) {
//     lead = lead.next;
//     leadIndex += 1;
//   }
//   // The following conditional accounts for values of K
//   // greater than the length of the linked list
//   if (leadIndex < k) return undefined;
//   let follow = head;
//   while (lead) {
//     lead = lead.next;
//     follow = follow.next;
//   }
//   return follow.value;
// }

module.exports = { Node, kthToLastNode };
