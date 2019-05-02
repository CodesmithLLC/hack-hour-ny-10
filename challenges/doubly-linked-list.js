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
  if (!this.head && !this.tail) {
    let newNode = new Node(val);
    this.head = newNode;
    this.tail = newNode;
  } else {
    let newNode = new Node(val);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  let newNode = this.head;
  while (newNode.val !== val && newNode) {
    newNode = newNode.next;
  }
  if (newNode) {
    if (newNode.next && newNode.prev) {
      newNode.next.prev = newNode.prev;
      newNode.prev.next = newNode.next;
    } else if (newNode.next) {
      this.head = newNode.next;
      this.head.prev = null;
    } else if (newNode.prev) {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
  }
};

// let ll = new LinkedList();
// ll.add(1);
// ll.add(2);
// console.log(ll);
// ll.add(3);
// console.log(ll);
// ll.remove(1);
// console.log(ll);

module.exports = LinkedList;
