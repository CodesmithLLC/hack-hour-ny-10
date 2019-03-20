/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (array.length < 3 || !Array.isArray(array)) return 0;
  
  //create empty array
  const productArr = [];

  for(let i = 1; i <= 3; i++) {
    let value = Math.max(...array);
    let index = array.indexOf(value)
    array.splice(index, 1)
    productArr.push(value);
    //console.log(productArr)
  }
  
  return productArr[0] * productArr[1] * productArr[2];
}

const arr = [1, 2, 4, 1, 5]
const arr2 = [1, 2, 4, 1, 5, 10, 32, 4, -1]
console.log(highestProduct(arr2))   //result 40

module.exports = highestProduct;
