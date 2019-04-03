/*  Given an array of numbers and a target number, return true if there are two numbers in the
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  const map = {};
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]]) {
      return true;
    } else {
      map[n - arr[i]] = arr[i];
    }
  }
  return false;
}

// console.log(twoSum([1, 2, 3, 4, 5], 5));
// console.log(twoSum([1, 2, 3, 4, 5], 1));
// console.log(twoSum([1, 2, 3, 4, 5], 100));

module.exports = twoSum;
