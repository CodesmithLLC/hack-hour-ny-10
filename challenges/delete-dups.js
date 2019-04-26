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
  if (!head) return;
  const list = {};
  const index = 0;
  const current = head;
  while (current) {
    if (!cache[current.value]) {
      cache[current.value] = 1;
      index += 1;
      current = current.next;
    } else {
      current.next === null;
      index -= 1;
    }
  }
  return list;
}

module.exports = deleteDups;
