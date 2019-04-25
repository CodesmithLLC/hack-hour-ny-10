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
  var current = head; 
  var vals = new Set();
  var prev; 

  while (current ){
    if(vals.has(current.value)) {
      prev.next = current.next; 
    } else {
      vals.add(current.value)
    }
    prev = current; 
    current = current.next
  }
 
  return head 
}

module.exports = deleteDups;
