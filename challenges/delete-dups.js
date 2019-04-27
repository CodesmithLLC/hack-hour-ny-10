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

// w/ temporary buffer
function deleteDups(head) {
  const buffer = {};
  let current = head;
  let lead = current.next;
  buffer[current.value] = true;
  while (lead) {
    if (buffer[lead.value]) {
      current.next = current.next.next;
      lead = lead.next;
    } else {
      buffer[lead.value] = true;
      current = current.next;
      lead = current.next;
    }
  }
}

// w/o temporary buffer
function deleteDups(head) {
  let current = head;
  while (current.next) {
    let lead = current.next;
    while (lead) {
      if (lead.value === current.value) {
        current.next = lead.next;
      }
      lead = lead.next;
    }
    current = current.next;
  }
}

module.exports = deleteDups;
