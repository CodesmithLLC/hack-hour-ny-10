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
  if (!l1) return l2;
  if (!l2) return l1;

  let dummy1 = new Node();
  let dummy2 = new Node();
  dummy1.next = l1;
  dummy2.next = l2;
  
  let tail1 = dummy1.next;
  let tail2 = dummy2.next;
  let tempNext2 = tail2.next;
  while (tail1 && tail2) {
    let tempNext1 = tail1.next;
    tempNext2 = tail2.next;
    tail1.next = tail2;
    tail2.next = tempNext1;
    tail1 = tempNext1;
    tail2 = tempNext2;
  }
  return dummy1.next;
}

module.exports = { Node: Node, zip: zip };
