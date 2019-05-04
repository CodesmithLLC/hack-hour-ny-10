// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort

function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; i += 1) {
    let bool = false;
    for (let k = 0; k < array.length - i - 1; k += 1) {
      if (array[k] > array[k + 1]) {
        const greater = array[k];
        array[k] = array[k + 1];
        array[k + 1] = greater;
        bool = true;
      }
    }
    if (bool === false) return array;
  }
  return array;
}

module.exports = bubbleSort;
