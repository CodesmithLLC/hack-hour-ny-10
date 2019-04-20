/**
 * We are familar with linked lists being linear and terminating:
 *
 * A->B->C->D
 *
 * However, linked lists can also have cyclical references:
 *
 * A->B->C->D
 *    ^     |
 *    |     V
 *    G<-F<-E
 *
 * Create a function that accepts a linked list and returns true if the linked list has a cyclical reference
 *
 * var node1 = new Node('1');
 * var node2 = node1.next = new Node('2');
 * var node3 = node2.next = new Node('3');
 * var node4 = node3.next = new Node('4');
 * var node5 = node4.next = new Node('5');
 * hasCycle(node1); // => false
 * node5.next = node2;
 * hasCycle(node1); // => true
 *
 * Challenge 1: Do this in linear time
 * Challenge 2: Do this in constant space
 * Challenge 3: Do not mutate the original nodes in any way
 *
 */

var Node = function (value) {
  this.value = value;
  this.next = null;
}

function hasCycle(head) {
  let slowP = head;
  let fastP = head;
  let counter = 0
  while (fastP !== null) {
    fastP = fastP.next;
    if (counter % 2) slowP = slowP.next;
    if (fastP === slowP) return true;
    counter++
  }
  return false
}

var node1 = new Node('1');
var node2 = node1.next = new Node('2');
var node3 = node2.next = new Node('3');
var node4 = node3.next = new Node('4');
var node5 = node4.next = new Node('5');
var node6 = node5.next = new Node('6')
var node7 = node6.next = new Node('7')
console.log(hasCycle(node1)); // => false
node7.next = node2;
console.log(hasCycle(node1)); // => true


module.exports = { Node: Node, hasCycle: hasCycle }
