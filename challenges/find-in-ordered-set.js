/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  const sorted = arr.sort((a, b) => {a - b})
  let half = sorted[Math.floor(sorted.length / 2)]
  if (target > half) {
    for (let i = half + 1; i < sorted.length; i++) {
      if (target === sorted[i]) return true;
    }
  } else {
    for (let i = 0; i <= half; i++) {
      if (target === sorted[i]) return true;
    }
  }
  return false;
}

const nums = [1, 4, 6, 7, 9, 17, 45]
console.log(findInOrderedSet(nums, 4)); // -> true
console.log(findInOrderedSet(nums, 2));  //-> false


module.exports = findInOrderedSet;



// function findInOrderedSet(arr, target) {
//   let lo = 0;
//   let hi = arr.length - 1;
//   while (lo < hi) {
//     let midIdx = Math.floor((hi - lo) / 2) + lo
//     if (arr[midIdx] === target) {
//       return true;
//     } else if (arr[midIdx] < target) {
//       lo = midIdx + 1
//     } else {
//       hi = midIdx - 1
//     }
//     count += 1;
//   }
//   return (arr[lo] === target) ? true: false
// }