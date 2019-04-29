/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */

function findInOrderedSet(arr, target) {
  let lo = 0;
  let hi = arr.length - 1;
  while (lo < hi) {
    let midIdx = Math.floor((hi - lo) / 2) + lo
    if (arr[midIdx] === target) {
      return true;
    } else if (arr[midIdx] < target) {
      lo = midIdx + 1
    } else {
      hi = midIdx - 1
    }
  }
  
  return (arr[lo] === target) ? true: false
}
// var nums = [1, 4, 6, 7, 9, 17, 45, 92]
// console.log(findInOrderedSet(nums, 1)); // -> true





module.exports = findInOrderedSet;
