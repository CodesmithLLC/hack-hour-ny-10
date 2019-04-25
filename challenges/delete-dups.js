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
  // hash map solution, linear time, linear space
  // delete a node by assigning it the 'value' and 'next' properties of its .next
  const originalHead = head;
  let lastFlag = false;
  const map = {};
  while (head) {
    if (map[head.value]) {
      if (!head.next) {
        lastFlag = true;
        break;
      }
      head.value = head.next.value;
      head.next = head.next.next;
    }
    map[head.value] = 1;
    head = head.next;
  }
  if (lastFlag) {
    head = originalHead;
    while (head.next.next) {
      head = head.next;
    }
    head.next = null;
  }
  return originalHead;
}

module.exports = deleteDups;
