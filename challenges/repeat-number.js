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

function factorial(n) {
  if (n === 1 || n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

function repeatNumbers(array) {
  const fact = factorial(array.length - 1);
  let multiply = 1;

  for (let i = 0; i < array.length; i++) {
    multiply *= array[i];
  }
  return multiply / fact;
}

// const arr = [1, 2, 3, 4, 4];
// console.log(repeatNumbers(arr));

module.exports = repeatNumbers;
