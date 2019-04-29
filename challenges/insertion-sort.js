// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort

function insertionSort(array) {
  let pointer = 1;
  while (pointer < array.length) {
    let cand = array[pointer];
    let back = pointer - 1;
    while (array[back] > array[back + 1]) {
      [array[back], array[back + 1]] = [array[back + 1], array[back]];
      back--;
    }
    pointer++;
  }
  return array;
}

module.exports = insertionSort;
