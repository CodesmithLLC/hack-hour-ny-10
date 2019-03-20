/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (array.length <= 2) return undefined;
  if (array.length === 3)
    return (
      array[array.length - 1] *
      array[array.length - 2] *
      array[array.length - 3]
    );
  array = array.sort((a, b) => {
    return a - b;
  });
  let max =
    array[array.length - 1] * array[array.length - 2] * array[array.length - 3];
  max =
    array[0] * array[1] * array[array.length - 1] > max
      ? array[0] * array[1] * array[array.length - 1]
      : max;
  return max;
}

module.exports = highestProduct;
