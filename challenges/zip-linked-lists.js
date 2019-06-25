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
}

// ALTERNATIVE

// Iterative

function zip(l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;

  var head = l1;
  var temp = l1;

  l1 = l1.next;

  while (l2 && l1) {
    temp.next = l2;
    l2 = l2.next;
    temp = temp.next;
    temp.next = l1;
    l1 = l1.next;
    temp = temp.next;
  }

  temp.next = l2 ? l2 : l1;
  return head;
}

// Recursive
function zip(l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;

  var curr = new Node(l1.value);
  curr.next = zip(l2, l1.next);
  return curr;
}

// MERGING IN ORDER OF GREATER VALUE

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {
  if (l1 == null) return l2;
  if (l2 == null) return l1;

  if (l1.value < l2.value) {
    l1.next = zip(l1.next, l2);
    return l1;
  }

  l2.next = zip(l2.next, l1);
  return l2;
}

module.exports = { Node, zip };
