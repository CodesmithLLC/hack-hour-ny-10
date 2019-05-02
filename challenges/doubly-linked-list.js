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
  let newNode = null;
  while (newNode.value !== val && newNode) {
    newNode = newNode.next;
  }
  if (newNode) {
    newNode.next.prev = newNode.prev;
    newNode.prev.next = newNode.next;
  }
};

module.exports = LinkedList;
