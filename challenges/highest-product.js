/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    return array.sort((a,b) => a - b)
                .slice(-3)
                .reduce((a,b) => a * b);
}

// console.log(highestProduct([2,6,8,3,4,9,5,1]))

module.exports = highestProduct;
