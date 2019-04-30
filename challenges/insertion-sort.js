// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort


// console.log(insertionSort([99,72,23,-1,0,17,12,-2,31,46,-23,88,54,37,-1,100,6,5,-4]));

// function insertionSort(array) {
//   for (let i = 1; i < array.length; i++){
//     let j = i - 1;
//     let value = array[i]
//     while(array[j] > value && j >= 0){
//       array[j+1] = array[j]
//       j-= 1;
//     }
//     array[j+1] = value;
//   }
//   return array;
// }

// function insertionSort(array, num = 1){
//   if (num === array.length) return array;
//   let i = num - 1;
//   let value = array[num]
//   while(array[i] > value && i >= 0){
//     array[i + 1] = array[i];
//     i--;
//   }
//   array[i+1] = value;
//   return insertionSort(array, ++num);
// }

/**
 * Recursively find apropriate index (location) to insert current value
 * 
 * @param {Array} array array to perform search on
 * @param {Integer} value current value to evaluate for placement
 * @param {Integer} start start boundary of sorted array
 * @param {Integer} end end boundary of sorted array
 */
function binarySearch(array, value, start, end){
  // insert before or after the boundary
  if (start === end){
    if (array[start] > value) return start;
    else return start+1;
  }

  // moved beyond boundary
  if (start > end) return start;

  // find middle value and compare with current value
  // continue to search for appropriate position to place current value within array
  let mid = Math.floor((start + end)/2);

  if (array[mid] < value){
    return binarySearch(array, value, mid+1, end)
  }
  else if (array[mid] > value){
    return binarySearch(array, value, start, mid - 1);
  }
  else return mid;
}

/**
 * Interates through input array and calls the binary
 * search helper function to find the index at which to begin slicing and sorting the array
 * 
 * @param {Array} array unsorted array
 * @returns {Array} sorted array
 */
function insertionSort(array){
  // iterate through array keeping in mind that
  // array to the left of current index is sorted,
  // and array to the right is unsorted.
  // use binary search to find appropriate 
  // index to place current value on the right (sorted) side of the array
  for (let currIndex = 1; currIndex < array.length; currIndex++){
    value = array[currIndex];
    let pivot = binarySearch(array, value, 0, currIndex-1)
    array = array.slice(0,pivot) // beginning of array up until new index to place value
          .concat([value]) // current value
          .concat(array.slice(pivot,currIndex)) // the rest of the sorted portion of the array
          .concat(array.slice(currIndex+1)) // the unsorted portion of the array

  }
  return array;
}

module.exports = insertionSort;