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
  if (!cur) return undefined;
  if (cur.val === target) {
    this.head = cur.next;
    this.head.prev = null;
    if (cur === this.tail) {
      this.tail === this.head;
      return cur;
    }
  }
  while(cur) {
    if (!cur.next) return undefined;
    if (cur.next.val === target) break;
    cur = cur.next;
  }
  let returnNode = cur.next;
  let newNext = cur.next.next;
  if (newNext) {
    newNext.prev = cur;
  }
  if (!newNext) {
    this.tail = cur;
  }
  cur.next = newNext;
  return returnNode;
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
