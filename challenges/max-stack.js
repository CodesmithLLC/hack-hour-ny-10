/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
	this.stack = {};
	this.maxArray = [Number.MIN_SAFE_INTEGER];
	this.max = this.maxArray[0];
	this.length = 0;

	this.push = function(val) {
		this.stack[this.length++] = val;
		if(val > this.max) {
			this.max = val;
			this.maxArray.push(val);
		}
		return this.length;
	}
	this.pop = function() {
		if(this.length === 0) return null;
		const val = this.stack[--this.length];
		delete this.stack[this.length];
		if(this.maxArray[this.maxArray.length-1] === val) {
			this.maxArray.pop();
			this.max = this.maxArray[this.maxArray.length-1];
		}
		return val;
	}
	this.getMax = function() {
		return this.max;
	}
}
// const stk = new Stack();
// stk.push(5);
// stk.push(10);
// console.log(stk.max);
// console.log(stk.stack);
// stk.pop();
// console.log(stk.max);
// stk.pop();
// console.log(stk.max);
// console.log(stk.stack);

module.exports = Stack;