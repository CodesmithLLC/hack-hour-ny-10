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
  if (!head) return undefined
  const hash = {}
  let pointer = head;
  while (pointer) {
    hash[pointer.value] = true;
    if (pointer.next !== null && hash[pointer.next.value] === true)  { // check hash, if already seen, delete next
      pointer.next = pointer.next.next // delete repeat
    } else {
    pointer = pointer.next
    }
  }
  return head
}

module.exports = deleteDups;
