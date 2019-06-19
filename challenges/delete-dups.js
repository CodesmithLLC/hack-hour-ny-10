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

function deleteDups(head) {
  const buffer = {};
  let current = head;
  let leading = head.next;
  buffer[head.value] = true;

  while (leading) {
    if (buffer[leading.value]) {
      current.next = current.next.next;
      leading = leading.next;
    } else {
      buffer[leading.value] = true;
      current = current.next;
      leading = leading.next;
    }
  }
}

// w/o temporary buffer
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

const linkedList = {
  value: 1,
  next: {
    value: 1,
    next: { value: 5, next: { value: 4, next: { value: 1, next: null } } },
  },
};
deleteDups(linkedList);
console.log(linkedList);
module.exports = deleteDups;
