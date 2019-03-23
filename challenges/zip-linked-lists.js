/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {
  if (!l2) return l1;
  if (!l1) return l2;
  
  let tempList = l1.next
  l1.next = l2;
  l2.next = zip(tempList, l2.next)  
  return l1;
};

var node1 = new Node('1');
var node2 = node1.next = new Node('2');
var node3 = node2.next = new Node('3');
var node4 = node3.next = new Node('4');
var node5 = node4.next = new Node('5');

var node1b = new Node('6');
var node2b = node1b.next = new Node('7');
var node3b = node2b.next = new Node('8');
var node4b = node3b.next = new Node('9');
var node5b = node4b.next = new Node('10');

let test = zip(undefined,node1b);

while(test){
  console.log(test.value)
  test = test.next;
}

module.exports = {Node: Node, zip: zip};
