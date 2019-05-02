/*
Create a doubly linked list with an add and remove method
 */

function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

/*
Adds a node to the end of the list
 */
LinkedList.prototype.add = function(val) {
  // if no head & no tail
  let tmp = new Node(val)
  if (this.head === null) {
    this.head = tmp;
    this.tail = tmp;
  } else {
    tmp.prev = this.tail;
    this.tail.next = tmp;
    this.tail = this.tail.next;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(target) {
  let cur = this.head;
  // five cases ->  1) Head is null (no elements in LL)
  //                2) Head is tail (just one element)
  //                3) Target is head
  //                4) Target is in middle of LL
  //                5) Target is tail

  // case 1 - empty list
  if (!cur) return undefined;

  // case 2 & 3 - head is val / head === tail
  if (cur.val === target) {
    if (cur === this.tail) {
      this.head = null;
      this.tail = null;
      return cur;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      return cur;
    }
  }

  // case 4 & 5 - head is in middle / is tail
  while (cur) {
    if (!cur.next) return undefined // have iterated through list and not found
    if (cur.next.val === target) break; // have found the target as next node;
    cur = cur.next;
  }
  // target is tail case
  if (cur.next.next === null) {
    this.tail = cur;
    let tmp = cur.next;
    cur.next = null;
    return tmp;
  } else {
    let targetNode = cur.next;
    cur.next = cur.next.next;
    cur.next.next.prev = cur;
    return targetNode
  }

};

// let ll = new LinkedList()
// ll.add(5)
// ll.add(10)
// ll.add(15)
// ll.add(20)
// ll.remove(5)
// ll.add(100)
// console.log(ll)

module.exports = LinkedList;
