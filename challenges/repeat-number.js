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
    // use bitwise xor
    result = result ^ i ^ array[i];
  }
  return result;
}

// function repeatNumbers(array) {
//   let i = 0;
//   while (i < array.length) {
//     let cur = Math.abs(array[i])
//     if (array[cur - 1] < 0) {return cur} // early exit
//     array[cur - 1]  *= -1
//     i += 1
//   }
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i] > 0) {
//       return (i + 1)
//     }
//   }
// }

// // O(n) time, O(1) solution
// // linear, mathematical solution
// function repeatNumbers(array) {
//   // sum up all numbers in array
//   const sum = array.reduce((acc, el) => acc + el);
//   // find expected sum of numbers in range
//   const expectedSum = ((array.length - 1) * array.length) / 2;
//   // subtract two to find result
//   return sum - expectedSum;
// }

// const arr = [1, 6, 7, 1];
// console.log(repeatNumbers(arr));

module.exports = repeatNumbers;
