/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */

// ITERATIVE SOLUTION
function findInOrderedSet(arr, target) {
  let lo = 0;
  let hi = arr.length - 1;
  while (lo < hi) {
    const midIdx = Math.floor((hi - lo) / 2) + lo;
    if (arr[midIdx] === target) {
      return true;
    }
    if (arr[midIdx] < target) {
      lo = midIdx + 1;
    } else {
      hi = midIdx - 1;
    }
  }
  return arr[lo] === target;
}

// RECURSIVE SOLUTION

function findInOrderedSet(arr, target) {
  // get the value at the middle of the array
  const mid = Math.floor(arr.length / 2);
  // if value has been found
  if (arr[mid] === target) return true;
  // recursively search left half of the array
  else if (target < arr[mid]) return findInOrderedSet(arr.slice(0, mid), target);
  // recursively search right half of the array
  else if (target > arr[mid]) return findInOrderedSet(arr.slice(mid + 1), target);
  // if value is not found
  return false;
}

const nums = [1, 4, 6, 7, 9, 17, 45];
console.log(findInOrderedSet(nums, 4));
console.log(findInOrderedSet(nums, 2));

module.exports = findInOrderedSet;
