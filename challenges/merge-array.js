/**
 * We have our lists of orders sorted numerically already, in arrays.
 * Write a functin to merge our arrays of orders into one sorted array.
 * These may be of different lengths.
 *
 * var my_array = [3,4,6,10,11,15,21];
 * var another_array = [1,5,8,12,14,19];
 *
 * mergeArrays(my_array, another_array); -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]
 *
 * BONUS:
 * Complete in O(n) time
 *
 */

function mergeArrays(arr1, arr2) {
  const result = [];

  for (let i = 0, j = 0; i < arr1.length, j < arr2.length;) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i += 1;
    }
    if (arr1[i] > arr2[j]) {
      result.push(arr2[j]);
      j += 1;
    }
    if (i === arr1.length) return [...result, ...arr2.slice(j)];
    if (j === arr2.length) return [...result, ...arr1.slice(i)];
  }
}

const myArray = [3, 4, 6, 10, 11, 15, 21, 25];
const anotherArray = [1, 5, 8, 12, 14, 19, 22, 23, 24];
console.log(mergeArrays(myArray, anotherArray)); // [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]
module.exports = mergeArrays;
