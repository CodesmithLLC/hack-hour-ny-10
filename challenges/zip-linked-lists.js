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
// SOLUTION: NOT IN PLACE

function zip(l1, l2) {
  if (!l1 && !l2) return null
  let zippedList = new Node(0);
    if (l1 && l2) {
      zippedList.value = l1.value;
      zippedList.next = new Node(l2.value);
      l1 = l1.next;
      l2 = l2.next;
      if (l1 || l2) {
        zippedList.next.next = zip(l1,l2);
      }
    }
    else if (l1 & !l2) {
      zippedList.value = l1.value;
      l1 = l1.next;
      if (l1 || l2) {
        zippedList.next.next = zip(l1,l2);
      }
    }
    else if (!l1 && l2) {
      zippedList.value = l2.value;
      l2 = l2.next;
      if (l1 || l2) {
        zippedList.next.next = zip(l1,l2);
      }
    }
  return zippedList;
};

// let l1 = new Node(1);
// l1.next = new Node(2);
// l1.next.next = new Node(3);
// console.log(zip(l1, l1));

module.exports = {Node: Node, zip: zip};
