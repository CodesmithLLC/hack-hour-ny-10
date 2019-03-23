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
  let zip = l1.next;
  let sec = l2;
  const node = new Node(l1.value);
  let curr = node;
  // let temp = null;
  // while(zip !== null && sec !== null) {
  //   temp = zip.next;
  //   zip.next = sec;
  //   sec = sec.next;
  //   zip = zip.next;
  //   zip.next = temp;
  // }
  while(zip !== null && sec !== null) {
    curr.next = sec;
    curr = curr.next;
    curr.next = zip;
    sec = sec.next;
    zip = zip.next;
  }
  print(l1);
};

function print(ll) {
  let c = ll;
  while(c) {
    console.log(c.value);
    c = c.next;
  }
}

const x = new Node(1);
let curr = x;
curr.next = new Node(2);
curr = curr.next;
curr.next = new Node(3);
curr = curr.next;
curr.next = new Node(4);
const y = new Node(5);
let curr2 = y;
curr2.next = new Node(6);
curr2 = curr2.next;
curr2.next = new Node(7);
curr2 = curr2.next;
curr2.next = new Node(8);

console.log(zip(x,y));

module.exports = {Node: Node, zip: zip};
