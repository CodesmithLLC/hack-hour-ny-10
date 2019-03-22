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
  let list1Current = l1.head
  let list2Current = l2.head

  list2Current.next = list1Current.next;
  list1Current.next = list2Current;

  while(list2Current !== null){
    list1Current = list1Current.next.next
    list2Current = list2Current.next.next
  }
  return
};

module.exports = {Node: Node, zip: zip};
