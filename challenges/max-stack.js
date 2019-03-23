/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  this.stack = {}
  this.length = 0;
  this.max;
}

Stack.prototype.push = function(value) {
  if (!this.length) this.max = value;
  else if (value > this.max) this.max = value;

  this.stack[this.length] = value;
  return ++this.length;
}

Stack.prototype.pop = function() {
  if (!this.length) return undefined;

  const last = this.stack[this.length - 1];
  delete this.stack[this.length--];
  return last;
}

Stack.prototype.getMax = function() {
  return this.max;
}

module.exports = Stack;