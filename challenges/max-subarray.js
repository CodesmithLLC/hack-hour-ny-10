/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
    let front = 0;
	let end = 0;
    let max = arr[0];
    let sum = 0;
    while(end < arr.length-1) {
        const first = arr[front];
        if(first <= 0) {
            front++; end++;
			max = Math.max(max, first);
        } else {
			if(sum === 0) sum += first;
            sum += arr[++end];
			max = Math.max(max, sum);
			if(sum <= 0) {
				sum = 0; end++;
				front = end;
			}
        }
    } return max;
}
//console.log(maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]));

module.exports = maxSubarray;
