/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = i + 1; j < arr.length; j += 1) {
      if (arr[i] + arr[j] === n) return true;
    }
  }
  return false;
}

const arr = [1, 3, 5, 2, 11, 13];
console.log(twoSum(arr, 13));
console.log(twoSum(arr, 8));
console.log(twoSum(arr, 23));

module.exports = twoSum;
