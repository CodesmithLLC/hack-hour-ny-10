// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort

function insertionSort(array) {
  // skip the first element of the array since an array consisting of one element is sorted
  let i = 1;
  while (i < array.length) {
    let j = i;
    while (j > 0 && array[j - 1] > array[j]) {
      // if j > 0 and the previous element of the array is greater than the next, swap them
      // console.log(
      //   '\ni',
      //   i,
      //   '\nj',
      //   j,
      //   '\narray[j]',
      //   array[j],
      //   '\narray[j-1]',
      //   array[j - 1]
      // );
      [array[j], array[j - 1]] = [array[j - 1], array[j]];
      // keep decrementing j until we reach the first element of the array
      j -= 1;
    }
    i += 1;
  }
  return array;
}

console.log(insertionSort([5, 67, 2, 16, 8, 1, 6, 81]));

module.exports = insertionSort;
