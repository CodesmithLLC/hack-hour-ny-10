/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (array.lenght < 3 || !Array.isArray(array))
    return 0
  let numbers = [array[0], array[1], array[2]];
  numbers.sort((a, b) => a - b);
  // console.log(numbers)
  if (array.length > 3)
  for (let index = 3; index < array.length; index++) {
    // console.log(array[index])
    if (array[index] >= numbers[2]) {
      numbers.shift();
      numbers.push(array[index]);
    } if (array[index] > numbers[1] && array[index] <= numbers[2]) {
      numbers[0] = numbers[1];
      numbers[1] = array[index];
    } if (array[index] > numbers[0] && array[index] <= numbers[1]) {
      numbers[0] = array[index];
    }
  }
  // console.log(numbers)
  return numbers[0] * numbers[1] * numbers[2];
}
// console.log(highestProduct([9,11,10,10,1,2,3]))
module.exports = highestProduct;