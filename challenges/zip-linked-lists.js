/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

function zip(l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;

  let currentL1 = l1;
  let currentL2 = l2;

  while (currentL1 || currentL2) {
    if (!currentL1.next) {
      currentL1.next = currentL2;
      return l1;
    } else if (!currentL2.next) {
      const toAdd = new Node(currentL2.value);
      toAdd.next = currentL1.next;
      currentL1.next = toAdd;
      return l1;
    }
    const toAdd = new Node(currentL2.value);
    toAdd.next = currentL1.next;
    currentL1.next = toAdd;
    currentL1 = currentL1.next.next;
    currentL2 = currentL2.next;
  }
}

module.exports = { Node: Node, zip: zip };
