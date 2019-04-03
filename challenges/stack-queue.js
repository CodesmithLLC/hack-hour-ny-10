/**
 * Create a stack.Then create a queue using two stacks.
 */

class Stack {
  constructor() {
    this.stack = {};
    this.length = 0;
  }

  pop() {
    const val = this.stack[this.length - 1];
    delete this.stack[this.length - 1];
    this.length--;
    return val;
  }

  push(val) {
    this.stack.length++;
    this.stack[this.stack.length] = val;
    return this.stack.length;
  }
}

/**
 * Queue Class
 */

class Queue {
  constructor() {
    this.forwardStack = new Stack();
    this.reverseStack = new Stack();
    this.length = 0;
  }

  pop() {
    while (this.forwardStack.length) {
      const popVal = this.forwardStack.pop();
      this.reverseStack.push(popVal);
    }
    const output = this.reverseStack.pop();
    delete this.reverseStack[this.length - 1];
    this.length--;
    return output;
  }

  push(val) {
    this.forwardStack.push(val);
    this.length++;
    return this.length;
  }
}

module.exports = { Stack: Stack, Queue: Queue };
