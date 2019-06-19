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
    if (!this.head) return undefined;

    let current = this.head;

    while (current) {
      if (current.val === val) {
        if (this.head === this.tail) {
          current.prev = null;
          this.head = current.next;
        } else if (current === this.tail) {
          current.prev.next = null;
          this.tail = current.prev;
        } else {
          current.prev.next = current.next;
          current.next.prev = current.prev;
        }
        return current.val;
      }
      current = current.next;
    }
    return 'value not found';
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

// approach:

// function LinkedList() {
//   this.head = null;
//   this.tail = null;
// }

// function Node(val) {
//   this.value = val;
//   this.next = null;
//   this.prev = null;
// }

// /*
// Adds a node to the end of the list
//  */
// LinkedList.prototype.add = function(val) {

//   const newNode = new Node(val);

//   // check for empty list
//   if (!this.head) {
//     this.head = newNode;
//     this.tail = newNode;
//   }
//   else {
//     // we're setting the next of the tail to the new node
//     this.tail.next = newNode;
//     // assigning the new node's prev pointer to tail
//     newNode.prev = this.tail;
//     // reassigning the tail pointer
//     this.tail = newNode;
//   }

// };

// /*
// Removes the first node with the inputted value
//  */
// LinkedList.prototype.remove = function(val) {

//   if (!this.head) return undefined;

//   let current = this.head;

//   while (current) {
//     // if there is only one node in the list
//     if (current.value === val && this.head === this.tail) {
//       this.head = null;
//       this.tail = null;
//     }
//     // if value is found in the head
//     else if (current.value === val && current === this.head){
//       // reassign the head pointer
//       this.head = this.head.next;
//       // dereference node accordingly
//       this.head.prev = null;
//       return current.value;
//     }
//     // if value is found in the middle of the list
//     else if (current.value === val && current.next) {
//       // assign prev node to connect to current's next
//       current.prev.next = current.next;
//       // reassign the prev of current's next to point to the prev node
//       current.next.prev = current.prev;
//       return current.value;
//     }
//     // if value is found at the end of the list
//     else if (current.value === val && !current.next) {
//       current.prev.next = null;
//       this.tail = current.prev;
//       return current.value;
//     }
//     current = current.next;
//   }
//   return "no such value"
// };
