/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 * */
const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');
a.next = b;
b.next = c;
c.next = d;
d.next = e;
// -> returns 'D' (the value on the second to last node)

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
  const values = [];
  while (head !== null) {
    values.push(head.value);
    head = head.next;
  }
  if (k > values.length) return undefined;
  return values[values.length - k];
}

console.log(kthToLastNode(2, a));

module.exports = { Node, kthToLastNode };
