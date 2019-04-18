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
  const obj = {};
  for (let el of array) {
    if (!obj[el]) {
      obj[el] = 1;
    } else {
      obj[el] += 1;
    }
  }
  for(let key in obj) {
    if (obj[key] === 2) {
      return key;
    }
  }
}

const arr = [1, 2, 3, 4, 5, 6, 1]
console.log(repeatNumbers(arr))

module.exports = repeatNumbers;
