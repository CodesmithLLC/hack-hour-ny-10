/**
 * Create a stack.Then create a queue using two stacks.
 */

// class Stack {
//   constructor() {
//     this.storage = {};
//     this.length = 0;
//   }

//   push(val) {
//     this.storage[this.length] = val;
//     this.length++;
//     return this.length;
//   }

//   pop() {
//     if (this.length === 0) return undefined;
//     const toDelete = this.storage[this.length - 1];
//     delete this.storage[this.length - 1];
//     this.length -= 1;
//     return toDelete;
//   }
// }

// /**
//  * Queue Class
//  */

// class Queue {
//   constructor() {
//     this.queue = new Stack();
//     this.helperStack = new Stack();
//     // this.queueLength = 0;
//   }

//   enqueue(val) {
//     if (this.queue.length) {
//       this.queue.push(val);
//     } else {
//       this.helperStack.push(val);
//     }
//   }

//   dequeue() {
//     if (!this.helperStack.length) {
//       while (this.queue.length > 1) {
//         this.helperStack.push(this.queue.pop());
//       }
//       return this.queue.pop();
//     } else if (!this.queue.length) {
//       while (this.helperStack.length > 1) {
//         this.queue.push(this.helperStack.pop());
//       }
//       return this.helperStack.pop();
//     }
//   }
// }

/* Solution: */

function Stack() {
  this.storage = {};
  this.index = 0;
}

Stack.prototype.push = function(value) {
  this.storage[this.index++] = value;
  return this.index;
};

Stack.prototype.pop = function() {
  let output = this.storage[--this.index];
  delete this.storage[this.index];
  return output;
};
/**
 * Queue Class
 */
function Queue() {
  this.in = new Stack();
  this.out = new Stack();
}

Queue.prototype.enqueue = function(value) {
  this.in.push(value);
  return this.in.index + this.out.index;
};

Queue.prototype.dequeue = function(value) {
  if (this.out.index > 0) return this.out.pop();
  while (this.in.index > 1) {
    this.out.push(this.in.pop());
  }
  return this.in.pop();
};

const stack = new Stack();
stack.push(0);
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();

const que = new Queue();
que.enqueue(0);
que.enqueue(1);
que.enqueue(2);
que.enqueue(3);
que.enqueue(4);
console.log(que.dequeue());
que.dequeue();
que.dequeue();

console.log(que);
module.exports = { Stack: Stack, Queue: Queue };
