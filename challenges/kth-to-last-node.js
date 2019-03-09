'use strict'
/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A');
 * const b = new Node('B');
 * const c = new Node('C');
 * const d = new Node('D');
 * const e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 */
const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

function Node(val) {
  this.value = val;
  this.next = null;
}

// console.log(a) ; 

function kthToLastNode(k, head) {
  if(!head || k === 0 ) return undefined; 

// go to the buttob. then start counting .. 
  let level = 0; 
  let currNode = head;
  let nodes = [] ; 
// console.log(currNode)
  while(currNode.next){
console.log(`Going down- k = ${k} level: ${level}`)   
    //if(level === k ) return currNode.value; 
    nodes.push(currNode)
    currNode = currNode.next;
    level += 1;
  }
console.log(nodes.length); 
  if( k > nodes.length) return undefined;
  
  return nodes[nodes.length-1-k];

  // set to first one 

}

let r = kthToLastNode(5, a);
console.log(r);
//module.exports = {Node: Node, kthToLastNode: kthToLastNode};
