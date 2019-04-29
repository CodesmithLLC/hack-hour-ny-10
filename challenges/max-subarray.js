/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  if (arr.length === 0) return 0;

  // initiate local sum and global sum trackers
  let finalSum = -Infinity;
  let currSum = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    // add current element to currSum
    // update current sum based on whichever value is bigger - that way we always keep track of the maximum local sum at each iteration
    currSum = Math.max(arr[i], (currSum += arr[i]));
    // update final sum based on whichever value is bigger so that we get a final max sum at the end
    finalSum = Math.max(finalSum, currSum);
  }

  return finalSum;
}

console.log(maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]));

module.exports = maxSubarray;
