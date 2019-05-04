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

console.log(bubbleSort([1, 5, 6, 7, 3, 7, 86, 3]));
module.exports = bubbleSort;
