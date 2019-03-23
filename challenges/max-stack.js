/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  this.max = 0;
  this.length = 0
  this.content = {};

  Stack.prototype.push = function (value) {
    this.content[this.length] = value 
    this.length += 1;
    this.max = this.max > value ? this.max : value;
  }

  Stack.prototype.pop = function () {
    let poppedElement = this.content[this.length - 1];
    this.length -= 1;
    delete this.content[this.length];
    console.log(this.max, poppedElement)
    if (this.max === poppedElement) {
      for (let key in this.content){
        this.max = 0;
        this.max = this.content[key] > this.max ? this.content[key] : this.max;
      }
    }
    return poppedElement;
  }

  Stack.prototype.getMax = function () {
    return this.max;
  }
}

// let newStack = new Stack();
// newStack.push(1);
// newStack.push(2);
// newStack.push(3);
// console.log(newStack.content)
// console.log(newStack.getMax());
// console.log(newStack.pop());
// console.log(newStack.getMax());

module.exports = Stack;