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
  let i = 0;
  while (i < array.length) {
    let cur = Math.abs(array[i])
    array[cur - 1]  *= -1
    i += 1
  }
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > 0) {
      return (i + 1)
    }
  }
}

let a = [2,3,4,5,1,3]
console.log(repeatNumbers(a))

module.exports = repeatNumbers;
