/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

// [3, 4, 5, 9, 4, 7, 6]

function highestProduct(array) {
  if (array.length < 3) return 0;
  if (array instanceof Array) {
    const sorted = array.sort((a, b) => {
      if (a > b) return 1;
      if (a < b) return -1;
      return a - b;
    });
    const highestThree = sorted.slice(array.length - 3);
    return highestThree[0] * highestThree[1] * highestThree[2];
  }
  return 0;
}

highestProduct([3, 4]);
highestProduct(3, 4, -5, 9, 4, 7, 6);
highestProduct([3, 4, 5, -9, 4, 7, 6]);
highestProduct([3, 4, 5, 9, 4, 7, 6]);

module.exports = highestProduct;
