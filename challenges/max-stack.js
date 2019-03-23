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
  this.max = {
    value: undefined,
    count: 0
  }
}

Stack.prototype.push = function(value) {
  if (!this.length || value > this.max.value) this.max = {value, count: 1};
  else if (value === this.max.value) this.max.count++;

  this.stack[this.length] = value;
  return ++this.length;
}

Stack.prototype.pop = function() {
  if (!this.length) return undefined;

  const last = this.stack[this.length - 1];
  delete this.stack[--this.length];

  this.max.count--;
  if (this.length === 0) {
    this.max = {value: undefined, count: 0}
  } else if (this.length > 0 && this.max.count === 0) {
    const newMax = {value: this.stack[0], count: 1};
    for (let i = 1; i < this.length; i += 1) {
      if (this.stack[i] > newMax.value) {
        newMax = {value: this.stack[i], count: 1};
      } else if (this.stack[i] === newMax.value) {
        newMax.count++;
      }
    }
  }

  return last;
}

Stack.prototype.getMax = function() {
  return this.max.value;
}


module.exports = Stack;