/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

// function Node(val) {
//   this.value = val;
//   this.next = null;
// }

// function zip(l1, l2) {
//   const newNode = new Node(l1.value);
  
//   let firstHead = l1.head;
//   let secondHead = l2.head;
  
  // let current = newNode.head

  // let current;
  // if (l1.length > l2.length) {
  //   current = l1;
  // } else {
  //   current = l2;
  // }

//   while (firstHead && secondHead) {
//     newNode.next = secondHead.value;
//     newNode = newNode.next;
//     newNode.next = firstHead.value;
//     newNode = newNode.next;
    
//     firstHead = firstHead.next;
//     secondHead = secondHead.next;
//   }
  
//   return newNode;

// };

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {

  if (!l1) return l2;

  let pointer1 = l2;
  let pointer2 = l2;
  let pointer3 = l1;

  while (pointer1 !== null) {
    pointer1 = pointer3.next;
    pointer3.next = pointer2;
    pointer3 = pointer3.next;
    pointer2 = pointer1;
  }

  return l1;
};


module.exports = {Node: Node, zip: zip};
