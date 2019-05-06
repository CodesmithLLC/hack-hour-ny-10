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
  if (!this.head) {
    this.head = new Node(val);
    return;
  }
  while (this.head.next) {
    this.head = this.head.next;
  }
};
/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {};

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//   }

//   add() {}

//   remove() {}
// }

module.exports = LinkedList;
