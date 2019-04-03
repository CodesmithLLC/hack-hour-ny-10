/*  Given an array of numbers and a target number, return true if there are two numbers in the
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  //linear time, linear space
  // add each element to hash map of complements, check at every point if map already contains needed complement
  const map = {};
  for (let el of arr) {
    const complement = n - el;
    if (map[complement]) return true;
    map[el] = 1;
  }
  return false;
}

module.exports = twoSum;
