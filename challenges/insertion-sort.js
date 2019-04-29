// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  let subArr = 1;

  for (let i = 0; i < array.length; i++) {
    for(let j = subArr - 1; j >= 0; j--) { 
      let temp = array[j + 1];
      if (temp < array[j]){
        array[j + 1] = array[j]
        array[j] = temp;
      }
    }
    subArr += 1;
  }
  return array;
}

const arr = [6, 5, 3, 1, 8, 7, 2, 4];
console.log(insertionSort(arr)) 

module.exports = insertionSort;