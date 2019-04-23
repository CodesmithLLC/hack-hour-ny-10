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
  let max = arr[0];
  // let begin = 0;
  let end = 1;
  let curSum = arr[0];
  while (end < arr.length) {
    // console.log('End: ', end,'CurSum: ', curSum,'CurEnd: ', arr[end],'CurMax: ', max)
    if (arr[end] >= 0 || curSum + arr[end] > 0) {
      // if current # is positive OR its addition results in a non-neg sum
      curSum += arr[end]; // increase the cursum
      max = Math.max(max, curSum); // update the max
      end++; // advance the end
    } else {
      // reset the start
      end++; // advance the end
      curSum = arr[end]; // reset the end
      max = Math.max(max, curSum); // update the max
      end++; // advance the end
    }
  }
  return max;
}

console.log(maxSubarray([1, -2, 3, 10, -4, 7, 2, -5])); //-> 18 from [3, 10, -4, 7, 2]
console.log(maxSubarray([15, 20, -5, 10])); //-> 40

module.exports = maxSubarray;
