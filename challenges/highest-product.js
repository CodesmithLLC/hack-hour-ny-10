/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
	array.sort(function(a, b) { return a-b; })
	const last = array.length-1;
	return (array[last] * array[last-1] * array[last-2]);
}

module.exports = highestProduct;
