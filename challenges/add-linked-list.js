/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (2 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 7 -> 0 -> 8
 *
 * The 7 is the ones digit (2 + 5).
 * The 0 is the tens digit (1 + 9, carry the 1).
 * The 8 is the hundreds digit (1 carried over + 5 + 2).
 *
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

//not complete


function addLinkedList(l1, l2) {
  let l3 = new Node(0);
  let count = 0;
  console.log(l1.next.value)
  while (l1 || l2)
  //for (let val in l2) {
    if(count === 0) {
      let sum = l1.value + l2.value
      l3.value = sum;
      console.log(l3)
      count += 1;
    } else {
      l1 = l1.next;
      l2 = l2.next;
      let theOver;
      let next = '.next'.repeat(count);
      let nextVal = next.concat('.value')
      let nodeVal1 = eval('l1'.concat(nextVal))
      let nodeVal2 = eval('l2'.concat(nextVal))
      let sums = nodeVal1 + nodeVal2
      if (sums > 9) {
        theOver = 1;
        let digit = Number(sums.toString().split('')[1])
        let nextNode = new Node(digit);
        console.log(nextNode)
      }
      console.log(sums)
      count += 1;

      //add values, check if over 10
      //if over 10 --> take one's digit, add to .next of l3
      //and subtract 10, take reminder and add to next sum
      //check again
    }

    console.log(l3)
    //add two values together
    //reassign value to l3 value
    //move pointer down linked list
    console.log(l2[val], l1[val])
    console.log(l2[val].next, l1[val].value)
  }
}

//Input: (2 -> 1 -> 5) + (5 -> 9 -> 2)
//Output: 7 -> 0 -> 8
const l1_2 = new Node(2);
const l1_1 = new Node(1);
l1_2.next = l1_1;
const l1_5 = new Node(5);
l1_1.next = l1_5;
let l1 = l1_2;

const l2_7 = new Node(7);
const l2_0 = new Node(0);
l2_7.next = l2_0;
const l2_8 = new Node(8);
l2_0.next = l2_8;
let l2 = l2_7;
console.log(l2)


addLinkedList(l1, l2)

module.exports = {Node: Node, addLinkedList: addLinkedList};
