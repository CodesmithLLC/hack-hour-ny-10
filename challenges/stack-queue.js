/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
    this.stack = {};
    this.len = 0;
    this.push = function(val) { this.stack[this.len++] = val; }
    this.peek = function() { return this.stack[this.len-1] }
    this.pop = function() {
        if(this.len < 1) return undefined;
        const val = this.stack[--this.len];
        delete this.stack[this.len];
        return val;
    }
}


/**
* Queue Class
*/


function Queue() {
    this.enter = new Stack();
    this.leave = new Stack();
    this.enqueue = function(val) {
        if(this.leave.len !== 0) while(this.leave.len !== 0) this.enter.push(this.leave.pop());
        this.enter.push(val);
    }
    this.dequeue = function() {
        if(this.enter.len !== 0) while(this.enter.len !== 0) this.leave.push(this.enter.pop());
        return this.leave.pop();
    }
    this.peek = function() {
        if(this.enter.len !== 0) return this.enter.stack[0];
        if(this.leave.len !== 0) return this.leave.stack[this.leave.len-1];
        return undefined;
    }
}

module.exports = {Stack: Stack, Queue: Queue};
