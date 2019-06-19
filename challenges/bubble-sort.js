// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort

function bubbleSort(array) {
  for (let i = array.length - 1; i >= 0; i -= 1) {
    for (let j = array.length - i; j > 0; j -= 1) {
      if (array[j] < array[j - 1]) {
        [array[j], array[j - 1]] = [array[j - 1], array[j]];
      }
    }
  }
  return array;
}

module.exports = bubbleSort;

// const arr = [1, 5, 7, 3, 8, 9, 2];

// // worst case : O(n^2) quadratic
// // best case: O(n) linear

// function bubbleSort(arr) {
//   let swapped = true;

//   while (swapped) {
//     swapped = false;
//     for (let i = 0; i < arr.length; i += 1) {
//       if (arr[i] > arr[i + 1]) {
//         [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
//         swapped = true;
//       };
//     };
//   };
//   return arr;
// };
