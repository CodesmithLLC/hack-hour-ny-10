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
  const n = new Node(val);
  if(!this.head) {
    this.head = n;
    this.tail = n;
  } else {
    this.tail.next = n;
    n.prev = this.tail;
    this.tail = n;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  let curr = this.head;
  while(curr && curr.val !== val) curr = curr.next;
  if(!curr) return null;
  const value = curr.val;
  if(curr.prev) curr.prev.next = curr.next;
  if(this.tail === curr) this.tail = curr.prev;
  if(curr.next) curr.next.prev = curr.prev;
  if(this.head === curr) this.head = curr.next;
  return value;
};

LinkedList.prototype.print = function() {
  console.log();
  let curr = this.head;
  while(curr) { 
    console.log('prev:', curr.prev ? curr.prev.val : null, 'curr:', curr.val, 'next:', curr.next ? curr.next.val : null); 
    curr = curr.next; 
  }
}

// const ll = new LinkedList();
// ll.add(1);
// ll.add(2);
// ll.add(3);
// ll.print();
// ll.remove(3);
// ll.print();
// ll.add(3);
// ll.print();
// ll.remove(2);
// ll.print();
// ll.add(2);
// ll.print();
// ll.remove(1);
// ll.print();

module.exports = LinkedList;
