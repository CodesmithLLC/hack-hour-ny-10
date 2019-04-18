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
  const sum = ((array.length - 1) * array.length) / 2;
  const actual = array.reduce((acc, el) => acc + el, 0);
  return actual - sum;
}

module.exports = repeatNumbers;
