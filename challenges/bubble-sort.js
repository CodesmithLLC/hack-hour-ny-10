// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort

function bubbleSort(array) {
  let endUnsorted = array.length;
  let alreadySorted = true;

  for (let i = 0; i < array.length; i++) {
    for (let x = 0; x < endUnsorted; x++) {
      if (array[x] > array[x + 1]) {
        const temp = array[x];
        array[x] = array[x + 1];
        array[x + 1] = temp;
        alreadySorted = false;
      }
    }
    endUnsorted -= 1;
    if (alreadySorted) return array;
  }
  return array;
}

console.log(bubbleSort([50, 8, 9, 7, 6, 1, 55, 2, 3]));

module.exports = bubbleSort;
