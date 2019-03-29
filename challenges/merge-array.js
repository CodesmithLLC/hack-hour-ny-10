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
  let newArray = [];
  while (arr1.length || arr2.length) {
    if (arr1[0] < arr2[0]){
      newArray.push(arr1.shift());
      console.log(arr1, arr2, newArray);
      }
    else if (arr1[0] > arr2[0]){
      newArray.push(arr2.shift());
      console.log(arr1, arr2, newArray);
      }
    else if (arr1[0] === arr2[0]){
      newArray.push(arr1.shift())
      arr2.shift();
      console.log(arr1, arr2, newArray);
    }
    if (!arr1.length)
      newArray.push(arr2.shift());
    else if (!arr2.length)
      newArray.push(arr1.shift());
  }
  return newArray;
}

// console.log(mergeArrays([3,4,6,10,11,15,21,50] , [1,5,8,12,14,19,22,30,31]))
module.exports = mergeArrays;
