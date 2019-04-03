/**
 * Create a stack.Then create a queue using two stacks.
 */

function Stack() {
  this.storage = {};
  this.index = 0;
}

Stack.prototype.push = function(...value) {
  for (let i=0; i<value.length; i++) {
    this.storage[value[i]] = value[i];
    this.index++;
  };
};

Stack.prototype.pop = function() {
  const arrOfKeys = Object.keys(this.storage);
  const lastKey = arrOfKeys[arrOfKeys.length - 1];
  delete this.storage[lastKey];
  this.index--;
  return lastKey;
}

function Queue() {
  this.pushStack = new Stack;
  this.popStack = new Stack;
}

Queue.prototype.enqueue = function (element) {
  this.pushStack.push(element)
}

Queue.prototype.dequeue = function () {
  if (this.popStack.index === 0) {
    if (this.pushStack.index === 0) return 'empty';
    
    while(this.pushStack.index > 0) {
      let p = this.pushStack.pop()
      this.popStack.push(p)
    }
  }
  return this.popStack.pop()
} 

// var q1 = new Queue();

// console.log(q1)
// q1.enqueue(3);
// console.log(q1)
// q1.enqueue(4);
// console.log(q1)
// q1.enqueue(5);
// console.log(q1)

// q1.dequeue()
// console.log('first deqeue', q1)

// q1.dequeue()
// console.log('second deqeue', q1)

// q1.enqueue(6);
// console.log(q1)

// q1.dequeue()
// console.log(q1)

// q1.dequeue()
// console.log(q1)


module.exports = {Stack: Stack, Queue: Queue};


// Queue should implement FIFO.
// Let's have a group of task 1 -10 to be performed

// //declare two stacks
// Stack S1, S2;

// //feed stack S1 with the tasks 1 - 10
// for(int i=1; i&lt;=10;i++)
// {
// S1.push(i);
// }
// //Now S1 contains {10,9,8,7,6,5,4,3,2,1} where the top is 10

// //Transfer all from S1 to S2
// while(!S1.isEmpty())
// {
// S2.push(S1.pop());
// }
// //Now S2 contains {1,2,3,4,5,6,7,8,9,10} where the top is 1

// You can now pop tasks from S2. Task 1 will be the first to pop and so on...
// Therefore, you just simulated FIFO using two stacks




// function Queue() {
//   this.pushS = new Stack();
//   this.popS = new Stack();
// }

// Queue.prototype.enqueue = function (ele) {
//   this.pushS.push(ele);
// };

// Queue.prototype.dequeue = function () {
//   if (this.pushS.length === 0) {
//     if (this.popS.length === 0) { return 'Cannot dequeue because queue is empty'; }
//     while (this.popS.length > 0) {
//       let p = this.popS.pop();
//       this.pushS.push(p);
//     }
//   }
//   return this.popS.pop();
// };