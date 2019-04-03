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
  if (arr1.length)

  for (let i=0; i<longArr.length; i++) {
    if (longArr[i] > shortArr[0]) {
      longArr.splice(i, shortArr.pop())
    } else {
      
    }
  }
}

module.exports = mergeArrays;


// while arr1 || arr2 exists
// check the elements of the arrs
// only move the pointer of the one after adding it
// if the pointer on an arr is pointing to an element thats larger than the current el on the other arr dont move