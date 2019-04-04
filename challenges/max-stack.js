/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  this.length = 0;
  this.store = {};
  // this.max = {
  //   idx: 0,
  //   val: Number.NEGATIVE_INFINITY,
  // }
}

Stack.prototype.push = function(val) {
  this.store[this.length] = val;
  this.length++;
  return this.length;
}

Stack.prototype.pop = function(val) {
  
}

  function push(val) {
    const stackPush = this.stack.push(val);
    return stackPush;
  }

  function pop(val) {
    const stackPop = this.stack.pop();
    return stackPop;
  }

  function getMax() {
    return Math.max([...this.stack]);
  }
}

module.exports = Stack;
