/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (!(array instanceof Array) || array.length < 3) return 0;
  const sortedArray = array
    .sort((a, b) => {
      if (a < b) return 1;
      if (a > b) return -1;
      return 0;
    })
    .slice(0, 3);
  return sortedArray.reduce((acc, curr) => acc * curr, 1);
}

module.exports = highestProduct;
