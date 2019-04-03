/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {

}


// const highestProduct = (array) => {
//     const sliced = array.slice();
//   // check for # of negatives values
//     const negatives = sliced.filter(elem => elem < 0);
  
//   if (negatives.length % 2 === 0) {
//     //even number of negative elements
//   sliced.sort((a,b) => a - b);
//   const first2last1 = sliced[0] * sliced[1] * sliced[sliced.length-1];
//   const last3 = sliced[sliced.length-3] * sliced[sliced.length-2] * sliced[sliced.length-1];
//   return Math.max(first2last1, last3);
//   } else {
//   //odd number of negative elements, sort by absolute value
//   sliced.sort((a,b)=> Math.abs(a) - Math.abs(b));
//   return sliced[0] * sliced[1] * sliced[2];
//   }
//   }

module.exports = highestProduct;
