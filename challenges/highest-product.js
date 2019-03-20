/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

// [3, 4, 5, 9, 4, 7, 6]

function highestProduct(array) {
  const sorted = array.sort((a, b) => a - b);
  const highestThree = sorted.slice(array.length - 3);
  return highestThree[0] * highestThree[1] * highestThree[2];
}

module.exports = highestProduct;
