/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function zip(l1, l2) {
  if (l1 === null && l2 !== null) return l2;
  if (l2 === null && l1 !== null) return l1;
  if (l1 === null && l2 === null) return undefined;

  let head = l1;
  let l1P1 = l1;
  let l1P2 = l1.next;
  let l2P1 = l2;
  let l2P2 = l2.next;

  while (true) {
    if (l1P1 === null && l1P2 === null) {
      break;
    }
    l1P1.next = l2P1;
    if (l1P2 === null) break; //
    l1P1 = l1P2;

    l2P1.next = l1P1;
    if (l2P2 === null) break; //
    l2P1 = l2P2;

    l2P2 = l2P1.next;
    l1P2 = l1P1.next;
  }

  return head;
}

module.exports = { Node: Node, zip: zip };
