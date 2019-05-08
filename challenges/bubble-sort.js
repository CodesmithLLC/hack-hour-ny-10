// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort


// console.log(swap(swap(swap([2,1,4,3,6,5], 0, 1), 2, 3), 4, 5))

/**
 * Using the bitwise operator xor, switch elements at given index.
 * 
 * @param {Array} array collection of integer elements
 * @param {Integer} idx1 index of first element
 * @param {Integer} idx2 index of second element
 */
function swap(array, idx1, idx2){
  let xor = array[idx1] ^ array[idx2];
  array[idx1] = xor ^ array[idx1]; 
  array[idx2] = xor ^ array[idx2]
  return array;
}

/**
 * Sorting algorithm that intends to bibble elements/numbers up to their correct position
 * 
 * @param {Array} array collection of integer elements
 * @returns sorted collection of integers
 */
function bubbleSort(array) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < array.length; i++){
      if (array[i] > array[i+1]){
        array = swap(array,i, i+1);
        swapped = true;
      }
    }
    if (!swapped) break;
  } while (swapped);
  return array;
}

/**
 * Sorting algorithm that moves larger numbers to the end while moving smaller numbers to the beginning
 * https://en.wikipedia.org/wiki/Cocktail_shaker_sort
 * 
 * @param {*} array collection of integer elements
 * @returns sorted collection of integers
 */
// function cocktailShakerSort(array){
//   let swapped;
//   // do while loop is best in the case that the array is already sorted, 
//   // then nothing would have been swapped
//   do {
//     swapped = false;
//     // start from beginning of array implementing bubble sort
//     for (let i = 0; i < array.length; i++){
//       if (array[i] > array[i+1]){
//         array = swap(array,i, i+1);
//         swapped = true;
//       }
//     }
//     // array is sorted
//     if (!swapped) {
//       break;
//     }
//     // (optimization) start from the end of the array moving turtles forward
//     for (let i = array.length - 2; i >= 0; i--){
//       if (array[i] > array[i+1]){
//         array = swap(array,i, i+1);
//         swapped = true;
//       }
//     }
//   } while (swapped);
//   return array;
// }

/**
 * Sorting algorithm that sorts numbers based on a gap. Helps aleviate 'turtles' (slower moving numbers)
 * https://en.wikipedia.org/wiki/Comb_sort
 * 
 * @param {Array} array collection of integer elements
 * @returns sorted collection of integers
 */
// function combSort(array){
//   let gap = array.length;
//   let shrink = 1.3;
//   let sorted = false;
//   while (!sorted){
//     // console.log(gap/shrink,'floor --->', Math.floor(gap/shrink) )
//     gap = Math.floor(gap/shrink)
//     if (gap <= 1){
//       gap = 1;
//       sorted = true;
//     }
//     // console.log('gap:', gap)
//     for(let i = 0; i + gap < array.length; i++){
//       // console.log('comparing:',array[i], array[i + gap])
//       if (array[i] > array[i + gap]){
//         array = swap(array,i, i+gap);
//         sorted = false;
//         // console.log(array) 
//       }
//     }
//   }
//   return array;
// }

// console.log(cocktailShakerSort([-3, 100, 2 ,3,4,5,1]))
// console.log(cocktailShakerSort([-3, 1, 2 ,3,4,5,100]))
// console.log(cocktailShakerSort([99,72,23,-1,0,17,12,-2,31,46,-23,88,54,37,-1,100,6,5,-4]))
// console.log(combSort([99,72,23,-1,0,17,12,-2,31,46,-23,88,54,37,-1,100,6,5,-4]))
// console.log(combSort([-3, 100, 2 ,3,4,5,1]))
// console.log(bubbleSort([-3, 100, 2 ,3,4,5,1]))
// console.log(bubbleSort([99,72,23,-1,0,17,12,-2,31,46,-23,88,54,37,-1,100,6,5,-4]))


module.exports = bubbleSort;
