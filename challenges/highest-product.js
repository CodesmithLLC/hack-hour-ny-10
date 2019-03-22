/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (!(array instanceof Array) || array.length < 3) return 0;

  return array.sort((a, b) => {
    if (a < b) return 1;
    if (a > b) return -1;
    return 0;
  }).slice(0,3).reduce((acc, currVal) => acc * currVal, 1)
}

console.log(highestProduct([1,2,3,4,5,6,7,8]))
console.log(highestProduct([4,5]))
console.log(highestProduct([]))
console.log(highestProduct([0,3,2]))
// console.log(highestProduct([3,4,-5,9,7,6]))
// console.log(highestProduct([3,4,-5,-9,7,6]))
// console.log(highestProduct([3,4, 5,-9,7,6]))
// console.log(highestProduct(5))

module.exports = highestProduct;
