// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  if(array.length <= 1 ) return array; 

  for ( let i = 1 ; i < array.length; i += 1) {
    for ( let j = i ; j > 0 ; j-=1) {
      if(array[j] < array[j-1]){
        let tmp = array[j-1] ; 
        array[j-1] = array[j]; 
        array[j] = tmp; 
      } else {
        break 
      }
    }
  }
  return array; 
}

module.exports = insertionSort;