/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.values = [];
  this.max = 0;
  this.count = 0;
}

Stack.prototype.getMax = function() {
  return this.max;
};

Stack.prototype.push = function(value) {
  this.values.push(value);
  this.count += 1;
  if (value > this.max) {
    this.max = value;
  }
};

Stack.prototype.pop = function() {
  if (this.values.length > 0) {
    this.count -= 1;
    let popped = this.values.pop();
    if (this.max === popped && this.count > 0) {
      let tempArr = [];
      let newMax = -99999;
      while (this.values.length > 0) {
        let temp = this.values.pop();
        tempArr.push(temp);
        if (temp > newMax) {
          newMax = temp;
        }
        console.log('!');
      }
      this.max = newMax;
      while (tempArr.length > 0) {
        let temp2 = tempArr.pop();
        this.values.push(temp2);
      }
    }
    return popped;
  }
  return false;
};
