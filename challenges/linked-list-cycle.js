/**
 * We are familar with linked lists being linear and terminating:
 *
 * A->B->C->D
 *
 * However, linked lists can also have cyclical references:
 *
 * A->B->C->D
 *    ^     |
 *    |     V
 *    G<-F<-E
 *
 * Create a function that accepts a linked list and returns true if the linked list has a cyclical reference
 *
 * var node1 = new Node('1');
 * var node2 = node1.next = new Node('2');
 * var node3 = node2.next = new Node('3');
 * var node4 = node3.next = new Node('4');
 * var node5 = node4.next = new Node('5');
 * hasCycle(node1); // => false
 * node5.next = node2;
 * hasCycle(node1); // => true
 *
 * Challenge 1: Do this in linear time
 * Challenge 2: Do this in constant space
 * Challenge 3: Do not mutate the original nodes in any way
 *
 */

var Node = function(value) {
  this.value = value;
  this.next = null;
}

function hasCycle(head) {
  
  let p1Slow = head;
  let p2Fast = head;
  
  while (p2Fast && p2Fast.next) {
    p1Slow = p1Slow.next;
    p2Fast = p2Fast.next.next;


    if (p1Slow === p2Fast) {
      return true
    }
  }
  return false;
  
  
  
  
  
  // let isLoop;
  // console.log(p1Slow.next.next)
  
  // //loop detection, basic condition for loop to exist
  // while (p2Fast.next.next) {
  //   p1Slow = p1Slow.next
  //   p2Fast = p2Fast.next.next

  //   if (p1Slow.value === p2Fast.value) {
  //     isLoop = true;
  //     break;
  //   }
  // }
  // //loop beginning detection
  // if (isLoop) {
  //   p1Slow = head;
  //   while (p1Slow !== p2Fast) {
  //     p1Slow = p1Slow.next;
  //     p2Fast = p2Fast.next
  //   }
  //   return p1Slow;
  // } else {
  //   return;
  // }

  // curr = this.value;
  // while(curr) {
  //   if (curr.value)
  // }


}

// function LinkedList () {
//   this.head = null;
// }

// let L1 = new LinkedList();
// let testData = [1, 2, 3, 4, 5, 6]
// testData.forEach( el => L1.insertNodeAtTail(el))


let node1 = new Node('1');
let node2 = node1.next = new Node('2');
let node3 = node2.next = new Node('3');
let node4 = node3.next = new Node('4');
let node5 = node4.next = new Node('5');
console.log(hasCycle(node1)); // => false
node5.next = node2;
console.log(hasCycle(node1)); // => true

module.exports = {Node: Node, hasCycle: hasCycle}
