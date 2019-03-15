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
    if(array.length === 1 && array[0] !== target) return false;
    array.sort(function(a, b) { return a-b; });
    const min = Math.min(recurse(array, target), recurse(array.slice(1), target))
    if(min === 0) return true;
    else return false;
} 
function recurse(arr, num) {
    if(arr.length <= 0) return num;
    if(num-arr[0] >= 0) num -= arr[0];
    return Math.min(recurse(arr.slice(1), num), recurse(arr.slice(2), num)); 
}
//console.log(subsetSum([3], 3));
module.exports = subsetSum;
