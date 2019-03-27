/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.storage = {};
  this.index = 0;
  this.sorted = [];
}

Stack.prototype.push = function(...value) {  
  for (let i = 0; i < value.length; i += 1) {
    this.storage[value[i]] = value[i];
    this.index++;
    for (let x=0; this.sorted.length; x+= 1) {
      if (!this.sorted.length) {
        this.sorted.push(value[x])
      }
      if (this.sorted[x] > value[i]) {
        this.sorted.splice(x, value[x])
      }
    }
  }
  return Object.keys(this.storage).length;
};

Stack.prototype.pop = function() {
  const arrOfKeys = Object.keys(this.storage);
  const lastKey = arrOfKeys[arrOfKeys.length - 1];
  for (let x=0; this.sorted.length; x+= 1) {
    if (this.sorted[x] === this.storage[lastKey]) {
      this.sorted.splice(x, 1)
    }
  }
  delete this.storage[lastKey];
  this.index--;
  return lastKey;
};

Stack.prototype.getMax = function() {
  return this.sorted[0];
};


module.exports = Stack;