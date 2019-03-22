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
  const queue = [l1, l2];
  let l1P = l1;
  let l2P = l2;

  while (l1P || l2P) {
    if (l1P && l1P.next) queue.push(l1P.next);
    if (l2P && l2P.next) queue.push(l2P.next);

    if (l1P) l1P = l1P.next;
    if (l2P) l2P = l2P.next;
  } 

  let newP = l1;
  while (queue.length) {
    newP.next = queue.shift();
    newP = newP.next;
  }
};

// const list1 = new Node(1);
// list1.next = new Node(3);
// list1.next.next = new Node(5);
// list1.next.next.next = new Node(7);
// list1.next.next.next.next = new Node(8);

// const list2 = new Node(2);
// list2.next = new Node(4);
// list2.next.next = new Node(6);
// list2.next.next.next = new Node(7);
// list2.next.next.next.next = new Node(8);

// zip(list1, list2);

// let test = list1;
// while (test) {
//   console.log(test.value);
//   test = test.next;
// }

module.exports = {Node: Node, zip: zip};
