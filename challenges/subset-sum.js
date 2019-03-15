/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 *
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function subsetSum(array, target) {
  if (!array.length) return false;
  let cache = {};
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] in cache) {
      return true;
    }
    let complement = target - array[i];
    cache[complement] = array[i];
  }
  console.log(cache);
  if (array.length === 1) {
    return false;
  } else {
    for (k in cache) {
      for (let i = 0; i < array.length; i += 1) {
        let arr = array.slice();
        arr.splice(i, 1);
        if (subsetSum(arr, k)) return true;
      }
    }
  }
  return false;
}

module.exports = subsetSum;
