/*  Given an array of numbers and a target number, return true if there are two numbers in the
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  arr.sort((a, b) => a - b);
  for (let outer = 0; outer < arr.length; outer++) {
    for (let inner = 1; inner < arr.length; inner++) {
      if (outer + inner === n) {
        return true;
      }
    }
  }
  return false;
}

console.log(twoSum([300, 4, 5, 6, 2, 1, 0, -1], 22));

module.exports = twoSum;
