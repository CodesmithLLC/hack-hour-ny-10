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
  let count = 0;
  for (let index in array) {
    count += array[index];
  }
  return count - Math.max(...array) * (Math.max(...array) + 1) * 0.5;
}

module.exports = repeatNumbers;
