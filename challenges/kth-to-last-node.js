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
  // let currentNode = head;
  // let nodeTotal = 0;
  // // count the number of total nodes
  // while (true){
  //   nodeTotal++;
  //   if (currentNode.next === null) break;
  //   currentNode = currentNode.next;
  // }

  // // reset current node to head and traverse until we've counted down to the node that we want
  // currentNode = head;
  // if (k > nodeTotal) return undefined;
  // while(nodeTotal !== k){
  //   currentNode = currentNode.next;
  //   nodeTotal--; 
  // }
  // return currentNode.value;

  let lead = head;
  let leadIndex = 0;
  while(leadIndex < k && lead){
    lead = lead.next
    leadIndex++;
  }
  if (leadIndex < k) return undefined;
  let follow = head;
  while (lead){
    lead = lead.next;
    follow = follow.next;
  }
  return follow.value;
}

// const a = new Node('A');
// const b = new Node('B');
// const c = new Node('C');
// const d = new Node('D');
// const e = new Node('E');

// a.next = b;
// // b.next = c;
// // c.next = d;
// // d.next = e;

// console.log(kthToLastNode(3, a));

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
