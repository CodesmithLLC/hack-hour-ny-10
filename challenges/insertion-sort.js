// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort


console.log(insertionSort([3,2,1]));

function insertionSort(array) {
  for (let i = 1; i < array.length; i++){
    let j = i - 1;
    let value = array[i]
    while(array[j] > value && j >= 0){
      array[j+1] = array[j]
      j-= 1;
    }
    array[j+1] = value;
  }
  return array;
}

module.exports = insertionSort;