// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort

function insertionSort(array) {
  // iterate over the argument array beginning from index 1
  for (let i = 1; i < array.length; i += 1) {
    const value = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > value) {
      array[j + 1] = array[j];
      j -= 1;
    }
    array[j + 1] = value;
  }
  return array;
}

module.exports = insertionSort;
