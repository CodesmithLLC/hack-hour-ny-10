/**
 * I have an array where every number in the range 1...n appears once except for
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

function repeatNumbers(array) {
  let result = 0;

  for (let i = 0; i < array.length; i++) {
    result = result ^ i ^ array[i];
  }
  return result;
}

// const arr = [1, 6, 7, 1];
// console.log(repeatNumbers(arr));

module.exports = repeatNumbers;
