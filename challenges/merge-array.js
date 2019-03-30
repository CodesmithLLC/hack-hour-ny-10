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
  let p1 = p2 = 0;
  const mergedArr = [];
  while (p1 < arr1.length && p2 < arr2.length) {
    const currVal1 = arr1[p1];
    const currVal2 = arr2[p2];

    if (currVal1 < currVal2) {
      mergedArr.push(currVal1)
      p1 += 1;
    } else {
      mergedArr.push(currVal2);
      p2 += 1;
    }
  }

  return mergedArr.concat(arr1.slice(p1)).concat(arr2.slice(p2));
}

const my_array = [3,4,6,10,11,15,21];
const another_array = [1,5,8,12,14,19];
console.log(mergeArrays(my_array, another_array));

module.exports = mergeArrays;
