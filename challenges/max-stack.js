/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.currentMax;
  this.length = 0;
  this.contents = [];

  this.push = function(x) {
    if (x > this.currentMax) {
      currentMax = x;
    }
    this.contents[this.length] = x;
    this.length++;
    return this.contents;
  };

  this.pop = function() {
    this.contents[this.length] = undefined;
    this.length--;
    return this.contents;
  };

  this.getMax = function() {
    return this.currentMax;
  };
}

Stack.push(3);

module.exports = Stack;
