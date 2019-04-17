/**
 * Create a stack.Then create a queue using two stacks.
 */


//not complete 

function Stack() {
  this.stack = {};
  this.length = 0;
}

Stack.prototype.push = function(value) {
  //add to this.stack
  this.stack[this.length] = value;
  //increase length by one
  this.length += 1;
}

Stack.prototype.pop = function () {
  //store last value of stack in temp variable
  const pop = this.stack[this.length - 1];
  //delete it from last position in array
  delete this.stack[this.length-1];
  //decrease length
  this.length -= 1;
  //return temp variable with popped value
  return pop;
}

/**
* Queue Class
*/


function Queue() {
  const stack1 = [];
  const stack2 = [];
}





module.exports = {Stack: Stack, Queue: Queue};
