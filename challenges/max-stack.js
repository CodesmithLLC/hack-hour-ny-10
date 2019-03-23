/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

//this version doesn't have constant time access to max value
//actually not using this.max in any productive way here
//need to use a better data structure to store max vals in order?
class Stack {
  constructor() {
    this.max = -Infinity;
    this.length = 0;
    this.stack = [];
  }

  push(n) {
    if (n > this.max) this.max = n;
    this.stack[this.length] = n;
    this.length++;
    return this.length;
  }

  pop() {
    let output = this.stack[this.length - 1];
    this.stack.splice(this.length - 1, 1);
    this.length--;
    return output;
  }

  getMax() {
    return Math.max(...this.stack);
  }
}

module.exports = Stack;
