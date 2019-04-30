/**
 * Write a function deleteDups that removes duplicates from an unsorted linked list.
 *
 * Example:
 * 1->2->3->3
 *
 * deleteDups(head); -> 1->2->3
 *
 * Extra:
 * How would you solve this problem if a temporary buffer is not allowed?
 */

function Node(val) {
  this.value = val;
  this.next = null;
}


function deleteDups(head) {
  let pHead = head;
  let p1 = head;
  let p2 = head.next;
  let dup;

  console.log(p2.value)
  while (p1 !== null & p2 !== null) {
    if (p1.value !== p2.value) {
      p1 = p1.next
      p2 = p2.next
    } else {
      dup = p2;
      p2 = p2.next.next
    }
  }
}


let L1 = new Node(1);
L1.next = new Node(2);
L1.next.next = new Node(3);
L1.next.next.next = new Node(3);
let head = L1;

console.log(deleteDups(head))


module.exports = deleteDups;




// // w/ temporary buffer
// function deleteDups(head) {
//   const buffer = {};
//   let current = head;
//   let lead = current.next;
//   buffer[current.value] = true;
//   while (lead) {
//     if (buffer[lead.value]) {
//       current.next = current.next.next;
//       lead = lead.next;
//     } else {
//       buffer[lead.value] = true;
//       current = current.next;
//       lead = current.next;
//     }
//   }
// }

// // w/o temporary buffer
// function deleteDups(head) {
//   let current = head;
//   while (current.next) {
//     let lead = current.next;
//     while (lead) {
//       if (lead.value === current.value) {
//         current.next = lead.next;
//       }
//       lead = lead.next;
//     }
//     current = current.next;
//   }
// }