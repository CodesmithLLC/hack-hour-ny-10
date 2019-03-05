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
  let goBackwards = k - 1
  //index of last node
  let position = 0
  //reaches tail
  let currentPosition = head
  const valueArr = []

  while (currentPosition.next) {
    valueArr.push(currentPosition.value)
    currentPosition = currentPosition.next
    position++
  }
  console.log(valueArr)

  if(valueArr[k+1]) return valueArr[k+1]
  else return undefined
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

console.log(kthToLastNode(10, a));

module.exports = { Node: Node, kthToLastNode: kthToLastNode };
