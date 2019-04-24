/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

// brute force => find all subarrays and sum
// iterative

function maxSubarray(arr) {
  if (!arr) return undefined;
  let max = -Infinity;
  let end = 0;
  let curSum = -Infinity;
  while (end < arr.length) {
    if (curSum < 0 && arr[end] > curSum) {
      curSum = arr[end]
    } else if (curSum + arr[end] > 0) {
      curSum += arr[end]
    } else {
      curSum = -Infinity
    }
    max = Math.max(max, curSum)
    end++
  }
  return max;
}

// console.log(maxSubarray([1, -2, 3, 10, -4, 7, 2, -5])); //-> 18 from [3, 10, -4, 7, 2]
// console.log(maxSubarray([15, 20, -5, 10])); //-> 40
// console.log(maxSubarray([-20, -15, -25, -24]))
console.log(maxSubarray([10, -5, 12, -40, 25]))
module.exports = maxSubarray;
