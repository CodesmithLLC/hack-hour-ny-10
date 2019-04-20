/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */


function mergeRanges(array) {
    array.sort((a,b) => {
        a = a[0];
        b = b[0];
        return a - b;
    });
    const result = [];
    let temp = array[0];
    for(let i = 1; i < array.length; i++) {
        const arr = array[i];
        if(arr[0] <= temp[1] && arr[1] >= temp[1]) temp[1] = arr[1];
        else if(arr[0] <= temp[1] && arr[1] <= temp[1]) continue; 
        else {
            result.push(temp);
            temp = arr;
        }
    } result.push(temp);
    return result;
}

console.log(mergeRanges([[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]))
console.log(mergeRanges([[0, 1], [3, 5], [4, 8], [5, 6]]))

module.exports = mergeRanges;
