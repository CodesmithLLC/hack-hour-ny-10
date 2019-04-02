/**
 * Create a stack.Then create a queue using two stacks.
 */

function Stack() {
  this.length = 0;
  this.store = {};
}

Stack.prototype.push = function (val) {
  this.store[this.length] = val;
  this.length += 1;
};

Stack.prototype.pop = function () {
  val = this.store[this.length];
  this.store[this.length] = null;
  return val;
};

/**
 * Queue Class
 */

function Queue() {
  this.stack1 = [];
  this.stack2 = [];
}

Queue.prototype.Enqueue = function (val) {
  this.stack1.push(val);
};

Queue.prototype.Dequeue = function () {
  while (stack1.length > 0) {
    this.stack1.pop(val);
    this.stack2.push(val);
    return this.stack2.pop();
  }
};

module.exports = { Stack, Queue };
