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
  //concat both arrays
  const bigArr = arr1.concat(arr2)
  console.log(bigArr)
  //use quick sort to determine
  quickSort(bigArr, bigArr[0], bigArr[bigArr.length-1])

}

function quickSort (arr, left, right) {
  const len = arr.length;
  let pivot;
  let partitionIndex;

  if(left < right) {
    pivot = right;
    partitionIndex = partition(arr, pivot, left, right)
  
    //sort left and right
    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
  }
  return arr;
}

function partition (arr, pivot, left, right) {
  let pivotValue = arr[pivot];
  let partitionIndex = left;

  for(let i = left; i < right; i++) {
    if(arr[i] < pivotValue) {
      swap(arr, i, partitionIndex)
      partitionIndex += 1;
    }
  }
  swap(arr, right, partitionIndex);
  return partitionIndex;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}


const my_array = [3,4,6,10,11,15,21];
const another_array = [1,5,8,12,14,19];

console.log(mergeArrays(my_array, another_array)); //-> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21])


module.exports = mergeArrays;
