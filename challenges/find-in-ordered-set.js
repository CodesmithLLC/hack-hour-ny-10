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
  let count = 0;
  while (lo < hi) {
    let midIdx = Math.floor((hi - lo) / 2) + lo
    if (count < 10) console.log(lo, hi, midIdx)
    if (arr[midIdx] === target) {
      return true;
    } else if (arr[midIdx] < target) {
      if (target > arr[hi]) return false
      lo = midIdx + 1
    } else {
      if (target < arr[lo]) return false
      hi = midIdx - 1
    }
    count += 1;
  }
  
  return (arr[lo] === target) ? true: false
}
// var nums = [1, 4, 6, 7, 9, 17, 45]
// console.log(findInOrderedSet(nums, 4)); // -> true





module.exports = findInOrderedSet;
