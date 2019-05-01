/* Accepts an array of integers and returns an array of all the possible products made by
 * multiplying all but one number. In other words, find all the products of multiplying any
 * array.length-1 numbers in the array.
 *
 * ex: getProducts([1, 7, 3, 4]); ->  [84, 12, 28, 21]
 * this is done via:
 * [7*3*4, 1*3*4, 1*7*4, 1*7*3]
 *
 * do not use division, becuase zero might be in the array and you cannot divide by zero
 */

function getAllProducts(array) {
  let zeroCount = array.filter(el => el === 0).length;
  if (zeroCount > 1) return array.fill(0);

  if (array.length === 1) return array;

  // should exclude first element in totalProduct, in case it just barely overflows (divide then multiply)
  let totalProduct = array[1];
  for (let i = 2; i < array.length; i++) {
    totalProduct *= array[i];
  }

  // reduce version:
  // totalProduct = array.reduce((acc, el, i) => {
  //   if (i !== 1 && i !== 2) {
  //     acc *= el;
  //   }
  //   return acc;
  // }, array[1]);

  let output = [totalProduct];
  for (let i = 0; i < array.length; i++) {
    if (el === 0) {
      output.push(
        array.reduce((acc, el, idx) => {
          if (idx !== i) {
            acc *= el;
          }
          return acc;
        }),
      );
    } else {
      totalProduct /= array[i];
      totalProduct *= array[i - 1];
      output.push(totalProduct);
    }
  }
  return output;
}

module.exports = getAllProducts;
