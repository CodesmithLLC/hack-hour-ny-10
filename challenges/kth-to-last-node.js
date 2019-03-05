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
  //determine length of linked list (by traversing once), then traverse again but stop after length-(k-1) steps
  let length = 1;
  let nextNode = head.next
  while (nextNode){
    nextNode = nextNode.next
    length++
  }
  
  //check to see if kth node is valid
  if(k > length || k < 1){
    console.log('no such node')
    return undefined
  }

  //traverse the list until the kth is reached
  let position = 1
  let end = length - (k - 1)
  let candidate = head
  while (position < end){
    position++
    candidate = candidate.next
  }
  return candidate.value;
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};

