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

function kthToLastNode(k, head) {
  let current = head;
  let listLength = 0;
  let counter = 0;

  while (current !== null) {
    listLength++;
    current = current.next;
  }
  current = head;
  while (current !== null) {
    counter++;
    current = current.next;
    if (counter === listLength - k) 
      return current;
  }
  if (k > listLength) {
    return undefined;
  }
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};


// // Solution I: linear time & space complexity
// function kthToLastNode(k, head) {
//   let list = [];
//   let currentNode = head;
//   while (currentNode) {
//     list.push(currentNode.value);
//     currentNode = currentNode.next;
//   }
//   return list[list.length-k];
// }

// // Solution II: linear time, constant space complexity
// function kthToLastNode(k, head) {
//   let lead = head;
//   let leadIndex = 0;
//   while (leadIndex < k && lead) {
//     lead = lead.next;
//     leadIndex++;
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