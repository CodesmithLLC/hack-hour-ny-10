/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.storage = {};
  this.length = 0;
}

Stack.prototype.push = function(value) {
  this.storage[this.length] = value;
  this.length += 1;
}

Stack.prototype.pop = function() {
  const remove = this.storage[this.length - 1];
  delete this.storage[this.length - 1];
  this.length -= 1;
  return remove;
}

Stack.prototype.getMax = function() {
  let max = this.storage[0]
  for (let i = 0; i < this.length; i++) {
    if (max < this.storage[i]) {
      max = this.storage[i];
    }
  }
  return max
}




module.exports = Stack;