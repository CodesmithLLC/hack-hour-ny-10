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
  //initialize a pointer at the head of each array
  //initialize an output array
  //compare the values at each pointer
  //add the smaller to the output array, repeat until one list is empty
  const output = [];
  let p1 = 0;
  let p2 = 0;

  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] < arr2[p2]) {
      output.push(arr1[p1]);
      p1++;
    } else {
      output.push(arr2[p2]);
      p2++;
    }
  }
  p1 < arr1.length
    ? output.push(...arr1.slice(p1))
    : output.push(...arr2.slice(p2));
  return output;
}

module.exports = mergeArrays;
