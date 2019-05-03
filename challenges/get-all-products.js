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
  const newArr = [];
  let product;
  let count = 1;
  for (let i = 0; i < array.length; i++) {
    product = array[i];
    for (let j = i + 1; j < array.length; j++) {

      if (count === array.length-1) {
        newArr.push(product);
        count = 1;
      } else {
        product *= array[j]
        console.log(product)
        count += 1;
      }
  }
  console.log(newArr)
}

console.log(getAllProducts([1, 7, 3, 4])); //->  [84, 12, 28, 21]

module.exports = getAllProducts;
