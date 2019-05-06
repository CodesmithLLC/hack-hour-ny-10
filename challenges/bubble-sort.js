// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
    for(let i = 0; i < array.length; i++) {
        let sorted = true;
        for(let j = 0; j < array.length - i - 1; j++) {
            if(array[j] > array[j+1]) {
                array[j] ^= array[j+1];
                array[j+1] ^= array[j];
                array[j] ^= array[j+1];
                sorted = false;
            }
        } if(sorted === true) return array;
    } return array;
}

//console.log(bubbleSort([1,6,2,5,4,3]));

module.exports = bubbleSort;
