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

function getAllProducts(arr) {
  if (!arr || arr.length === 0) return 0;
  
  let output = new Array(arr.length);
  output[0] = 1;
  for (let i = 1; i < arr.length; i += 1) {
    output[i] = output[i - 1] * arr[i - 1];
  }

  let right = 1;
  for (let j = arr.length - 1; j >= 0; j -= 1) {
    output[j] *= right;
    right *= arr[j]; 
  }

  return output;
}

let a = getAllProducts([1, 7, 3, 4]); //->  [84, 12, 28, 21]
console.log(a);

module.exports = getAllProducts;
