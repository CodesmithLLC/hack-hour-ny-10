/*  Given an array of numbers and a target number, return true if there are two numbers in the
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  sumTwoArray = false;
  let dictionary = {};
  for (index = 0; index < arr.length; index++) {
    dictionary[arr[index]] = n - arr[index];
    if (dictionary[n - arr[index]]) return true;
  }
  return false;
}

// console.log(twoSum([1, 2, 4, 5], 3));

module.exports = twoSum;
