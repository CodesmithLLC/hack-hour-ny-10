/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    let numbers = [array[0],array[1], array[2]].sort((a,b) => a-b);
    console.log(numbers)
    for (let index = 3; index < array.length; index++){
        console.log(array[index])
        if (array[index] > numbers[2]){
            numbers.shift();
            numbers.push(array[index]);
        }
        else if (array[index] > numbers[1] && array[index] < numbers[2]){
            numbers[0] = numbers[1];
            numbers[1] = array[index];
        }
        else if (array[index] > numbers[0] && array[index] < numbers[1]){
            numbers[2] = array[index];
        }
    }
    console.log(numbers)
    return numbers[0] * numbers[1] * numbers[2];
}

module.exports = highestProduct;
