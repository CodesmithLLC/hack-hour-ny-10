/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  let first = -Infinity;
  let second = -Infinity;
  let third = -Infinity;

  array.forEach(el => {
    console.log('el ', el, 'first ', first, 'second ', second, 'third ', third);
    if (el > first) {
      [third, second, first] = [second, first, el];
    } else if (el > second) {
      [third, second] = [second, el];
    } else if (el > third) {
      third = el;
    }
  });
  return first * second * third;
}

module.exports = highestProduct;
