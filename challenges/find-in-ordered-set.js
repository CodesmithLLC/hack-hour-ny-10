/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */

function findInOrderedSet(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) return true;
    else if (arr[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return false;
}

// RECURSIVE SOLUTION:
// function findInOrderedSet(arr, target) {=
//   // get the value at the middle of the array
//   const mid = Math.floor(arr.length/2);

//   // if value has been found
//   if (arr[mid] === target) return true;

//   // recursively search left half of the array
//   else if (target < arr[mid]) return findInOrderedSet(arr.slice(0,mid), target);

//   // recursively search right half of the array
//   else if (target > arr[mid]) return findInOrderedSet(arr.slice(mid+1),target)

//   // if value is not found
//   return false;

// }

// console.log(findInOrderedSet([1, 2, 3, 5, 6, 7, 8, 9], 9));
module.exports = findInOrderedSet;
