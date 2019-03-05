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
  if (head === null) return undefined;
  let p1 = head;
  let arr = [];
  while (p1 !== null) {
    arr.push(p1.value);
    p1 = p1.next;
  }
  if (k > arr.length) return undefined // in the case the kth to last element is before the head 
  return arr[arr.length - k];
}
const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');
const f = new Node('F')

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

console.log(kthToLastNode(12, a))


module.exports = { Node: Node, kthToLastNode: kthToLastNode };
