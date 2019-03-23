/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

class Stack {
  constructor() {
    this.stack = {};
    this.index = 0;
    this.maxVal = -Infinity;
  }

  push(val) {
    if (val > this.maxVal) this.maxVal = val;
    this.stack[this.index] = val;
    this.index += 1;
    return this.index;
  }

  pop() {
    if (this.index === 0) return this.val;
    const toDelete = this.stack[this.index - 1];
    delete this.stack[this.index - 1];
    this.index -= 1;

    if (toDelete === this.maxVal) {
      // find the new maxVal
      for (let key in this.stack) {
        if (this.stack[key] > this.maxVal) {
          this.maxVal = this.stack[key];
        }
      }
      // const values = Object.values(this.stack);
      // this.maxVal = Math.max(...values);
    }

    return toDelete;
  }

  getMax() {
    return this.maxVal;
  }
}

module.exports = Stack;
