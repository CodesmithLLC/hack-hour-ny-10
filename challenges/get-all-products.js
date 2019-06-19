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

// function getAllProducts(array) {
//   let productArray = [];
//   let zeroCount = 0;
//   let productWithoutZeros = 1;

//   for (let num of array) {
//     // if 0 in array, ignore and push increment zero count
//     if (num === 0) zeroCount++;
//     // else increase product
//     else productWithoutZeros *= num;
//   }

//   // If more than 1 zero in array, return products will always be 0
//   if (zeroCount > 1) return [0];
//   // Else if one zero exists, product will be total product and 0;
//   else if (zeroCount === 1) return [productWithoutZeros, 0];

//   // Else if no zeros in array, find all products and return productArray
//   for (let num of array) {
//     productArray.push(productWithoutZeros / num);
//   }
//   return productArray;
// }

// get all products without division
function getAllProducts(arr) {
  if (!arr || arr.length === 0) return [0];

  const output = new Array(arr.length);
  output[0] = 1;
  for (let i = 1; i < arr.length; i += 1) {
    // initialize the output array at 1 since we don't want to
    // multiply any numbers to themselves, and sweep right
    // multiplying each subsequent value to the product
    // of all subsequent values
    output[i] = output[i - 1] * arr[i - 1];
  }

  let right = 1;
  for (let j = arr.length - 1; j >= 0; j -= 1) {
    // the same process, but in reverse.
    // start from the penultimate value and sweep left
    // accumulating the product as you go
    output[j] *= right;
    right *= arr[j];
  }

  return output;
}

module.exports = getAllProducts;

// console.log(getAllProducts([2, 3, 4, 5]));
