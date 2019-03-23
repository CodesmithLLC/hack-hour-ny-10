/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.contents = {}
  this.index = this.maxIndex = 0;

  this.push = function (val){
    this.contents[this.index] = val;
    this.maxIndex = this.contents[this.index] > this.contents[this.maxIndex] ? this.index : this.maxIndex;
    return ++this.index;
  }

  this.pop = function () {
    const poppedVal =  this.contents[this.index - 1];
    if (!poppedVal) return;
    delete this.contents[this.index - 1];
    if (this.maxIndex == this.index - 1){
      let max = -Infinity;
      for (let valIndex in this.contents){
        if (this.contents[valIndex] > max) {
          max = this.contents[valIndex];
          this.maxIndex = valIndex;
        }
      }
    }
    --this.index;
    return poppedVal;
  }

  this.getMax = function () {
    return this.contents[this.maxIndex];
  }
}

module.exports = Stack;