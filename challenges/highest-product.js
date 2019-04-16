/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    let maxArr = [];
    for(let i = 0; maxArr.length <3; i++){
        maxArr.push(Math.max(...array))
    }
    return maxArr;
}

console.log(highestProduct([2,3,4,5]))
module.exports = highestProduct;
