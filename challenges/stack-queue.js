/**
 * Create a stack. Then create a queue using two stacks.
 */


function Stack() {
  this.stack = {};
  this.length = 0;
}

Stack.prototype.push = function(value) {
  const { stack } = this;
  
  stack[this.length++] = value;
  
  return this.length;
}

Stack.prototype.pop = function() {
  const { stack } = this;

  if (!this.length) return undefined;
  
  const lastItem = stack[--this.length];
  delete stack[this.length];
  
  return lastItem;
}

// const stack = new Stack;
// stack.push(5);
// stack.push(2);
// stack.push(7);
// console.log(stack.pop());
/**
* Queue Class
*/


function Queue() {
  this.stack1 = new Stack;
  this.stack2 = new Stack;
}

Queue.prototype.enqueue = function(value){
  this.stack1.push(value);
}

Queue.prototype.dequeue = function() {
  if(!this.stack1.length) return undefined;

  while(this.stack1.length) {
    this.stack2.push(this.stack1.pop());
  }

  const item = this.stack2.pop();

  while(this.stack2.length) {
    this.stack1.push(this.stack2.pop());
  }

  return item;
}

// const queue = new Queue;
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue());

module.exports = {Stack: Stack, Queue: Queue};
