/*
Create a doubly linked list with an add and remove method
 */

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  /*
Adds a node to the end of the list
 */
  add(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  }

  /*
Removes the first node with the inputted value
 */
  remove(val) {
    let current = this.head;
    let prev = null;
    if (this.head.val === val) {
      this.head.next.prev = null;
      this.head = this.head.next;
    }

    while (current.next) {
      if (current.val === val) {
        prev.next = current.next;
        current.next.prev = current.prev;
      }
      current = current.next;
      prev = current.prev;
    }
  }
}

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

// const newList = new LinkedList();
// newList.add(1);
// newList.add(2);
// newList.add(3);
// newList.remove(2);
// console.log(newList);

module.exports = LinkedList;
