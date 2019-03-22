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

  if(!l1) return l2;
  if(!l2) return l1;

  //create new linked list and list pointer
  let l3 = new Node(null, null);
  let prev = l3;

  //while both linked lists are not empty
  //move point to the next node
  while(l1 !== null && l2 !== null) {
    if (l1.value <= l2.value) {
      prev.next = l1;
      l1 = l1.next;
    } else {
      prev.next = l2;
      l2 = l2.next;
    }
    prev = prev.next;
  }

  //once at the end of linked list, add other list 
  if (l1 === null) {prev.next = l2}
  if (l2 === null) {prev.next = l1}

  //return the sorted linked list
  return l3.next;
};
//create linked list 1 -> 3 -> 10
let n3 = new Node(10, null);
let n2 = new Node(3, n3);
let n1 = new Node(1, n2);
let l1 = n1;  //head pointer

//create linked list 5 -> 6 -> 9
let n6 = new Node(9,null);
let n5 = new Node(6, n6);
let n4 = new Node(5, n5);
let l2 = n4;    //head pointer

console.log(zip(l1,l2));

module.exports = {Node: Node, zip: zip};
