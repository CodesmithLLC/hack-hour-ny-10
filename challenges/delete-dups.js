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
    const set = {};
    set[head.value] = true;
    let curr = head;
    let prev = null;
    while(curr !== null && curr.next !== null) {
        prev = curr;
        curr = curr.next;
        if(!set[curr.value]) set[curr.value] = true;
        else {
            prev.next = curr.next;
            curr.next = null;
            curr = prev.next;
        }
    }
}

// function print(head) {
//     let curr = head;
//     while(curr !== null) {
//         console.log(curr.value);
//         curr = curr.next;
//     }
// }

// const n = new Node(1);
// n.next = new Node(2);
// n.next.next = new Node(3);
// n.next.next.next = new Node(3);

// print(n);
// deleteDups(n);
// print(n);



module.exports = deleteDups;
