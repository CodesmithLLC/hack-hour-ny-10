/**
 * Create a stack.Then create a queue using two stacks.
 */

function Stack() {
  this.count = 0;
  this.storage = {};
}

Stack.prototype.push = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

// Removes and returns the value at the end of the stack
Stack.prototype.pop = function() {
  // Check to see if the stack is empty
  if (this.count === 0) {
    return undefined;
  }

  this.count--;
  var result = this.storage[this.count];
  delete this.storage[this.count];
  return result;
};

// Returns the length of the stack
Stack.prototype.size = function() {
  return this.count;
};

/**
 * Queue Class
 */

function Queue() {}

let stack = new Stack();
console.log(stack.push(1));
console.log(stack.size());
module.exports = { Stack: Stack, Queue: Queue };
