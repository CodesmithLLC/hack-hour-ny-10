/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
    let front = 0;
    let end = arr.length-1;
    if(arr[0] === target || arr[end] === target) return true;
    if(target > arr[end] || target < arr[0]) return false;
    while(front < end) {
        const mid = Math.floor((front + end) / 2);
        console.log(front, mid, end);
        if(target < arr[mid]) end = mid;
        else if(target > arr[mid]) front = mid;
        else return true;
    } return false;
}
//console.log(findInOrderedSet([1, 2, 9], 9));

module.exports = findInOrderedSet;
