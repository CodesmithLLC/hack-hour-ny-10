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
    this.max = [];
    this.length = 0;
    this.stack = [];
  }

  push(n) {
    this.max.push(n);
    this.max.sort((a, b) => b - a);
    this.stack[this.length] = n;
    this.length++;
    return this.length;
  }

  pop() {
    let output = this.stack[this.length - 1];
    this.stack.splice(this.length - 1, 1);
    this.length--;
    for (let i = 0; i < this.max.length; i++) {
      if (this.max[i] === output) {
        this.max.splice(i, 1);
        break;
      }
    }
    this.max.sort((a, b) => b - a);
    return output;
  }

  getMax() {
    if (this.length === 0) return undefined;
    return this.max[0];
  }
}

module.exports = Stack;
