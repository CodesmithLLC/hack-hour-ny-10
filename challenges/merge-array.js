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
  let mergedArray = [];
  let counter1 = 0;
  let counter2 = 0;
  while (arr1 !== undefined && arr2 !== undefined) {
    if (arr1[counter1] > arr2[counter2]) {
      mergedArray.push(arr1[counter1]);
      counter1++;
    } else {
      mergedArray.push(arr2[counter2]);
      counter2++;
    }
  }
}

var my_array = [3, 4, 6, 10, 11, 15, 21];
console.log(my_array[my_array.length]);

module.exports = mergeArrays;
