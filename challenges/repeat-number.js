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
  // let mid = Math.floor(array.length / 2);
  // let min = 0;
  // let max = array.length-1;

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] === array[i + 1]) {
      return array[i];
    }
  }
  return -1;
}

// const arr = [1, 2, 3, 4, 5, 6, 6, 7];
// console.log(repeatNumbers(arr));

module.exports = repeatNumbers;
