/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
    arr = arr.sort((a, b) => { return a-b; })
    let front = 0;
    let back = arr.length-1;
    while(front < back) {
        const sum = arr[front] + arr[back];
        if(sum < n) front++;
        else if(sum > n) back--;
        else return true;
    } return false;
}

//console.log(twoSum([5,2,7,5,8,4], 14));

module.exports = twoSum;
