/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  if (!arr || !arr.length || !n) return false;
  const dict = {}
  for (let i = 0; i < arr.length; i += 1) {
    if (dict[arr[i]]) {
      return true
    } else {
      let complement = n - arr[i];
      dict[complement]  = true
    }
  }
  return  false
}

module.exports = twoSum;
