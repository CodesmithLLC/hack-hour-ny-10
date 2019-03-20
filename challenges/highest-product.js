/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (array.length === 0) return 0;
  let maxPosArr = [];
  let maxNegArr = [];
  let minNeg = -Infinity;
  let arrSign = 1;
  for (let num of array) {
    console.log(num);
    if (num < 0) {
      //this block deals with keeping track of the three largest (magnitude) negative numbers
      if (num > minNeg) minNeg = num;
      if (maxNegArr.length < 3) {
        maxNegArr.push(num);
        maxNegArr.sort((a, b) => b - a); //sort descending
      } else {
        if (num < maxNegArr[0]) {
          //if candidate number is bigger (magnitude) than smallest
          maxNegArr.shift(); //remove the smallest negative number
          maxNegArr.push(num);
          maxNegArr.sort((a, b) => b - a); //re-sort,descending
        }
      }
    } else {
      //this block deals with keping track of the three largest positive numbers
      if (maxPosArr.length < 3) {
        maxPosArr.push(num);
        maxPosArr.sort((a, b) => a - b); //sort ascending
      } else {
        if (num > maxPosArr[0]) {
          //if candidate number is bigger (magnitude) than smallest
          maxPosArr.shift(); //remove the smallest number
          maxPosArr.push(num);
          maxPosArr.sort((a, b) => a - b); //re-sort, ascending
        }
      }
    }
  }
  const posProdMax = maxPosArr.reduce((acc, el) => (acc *= el));
  let mixProdMax = -Infinity;
  if (maxNegArr.length > 1) {
    mixProdMax =
      maxPosArr[2] *
      maxNegArr[maxNegArr.length - 1] *
      maxNegArr[maxNegArr.length - 2];
  }
  // console.log(maxPosArr, maxNegArr, posProdMax, mixProdMax,minNeg)
  return Math.max(posProdMax, mixProdMax, minNeg);
}

// highestProduct([1,4,6,1,3,5,-10])

module.exports = highestProduct;
