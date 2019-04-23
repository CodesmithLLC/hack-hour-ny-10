/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  if (!arr.length) return 0;
  let max = 0;
  let current = arr[0];
  for (let i = 1; i < arr.length; i++) {
    el = arr[i];
    current = Math.max(el, el + current);
    max = Math.max(max, current);
  }
  return max;
}

module.exports = maxSubarray;
