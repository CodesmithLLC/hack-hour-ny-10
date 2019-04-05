/**
 * Create a stack.Then create a queue using two stacks.
 */

function Stack() {
  this.storage = {};
  this.index = 0;
}

Stack.prototype.push = function (value) {
  this.storage[this.index++] = value;
  return this.index;
};

Stack.prototype.pop = function () {
  const output = this.storage[--this.index];
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

Queue.prototype.enqueue = function (value) {
  this.in.push(value);
  return this.in.index + this.out.index;
};

Queue.prototype.dequeue = function (value) {
  if (this.out.index > 0) return this.out.pop();
  while (this.in.index > 1) {
    this.out.push(this.in.pop());
  }
  return this.in.pop();
};

module.exports = { Stack, Queue };
