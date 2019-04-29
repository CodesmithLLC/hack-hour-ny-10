// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
    let len = array.length;
    for(let i = 1; i < len; i++) {
        const temp = array[i];
        let j = i;
        while(temp < array[j-1] && j >= 0) {
            array[j] = array[j-1];
            j--;
        } array[j] = temp;
    } return array;
}

module.exports = insertionSort;