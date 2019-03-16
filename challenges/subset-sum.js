/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function subsetSum(array, target) {
  //first base case: if target has been reduced to 0, return true
  if(!target) return true;
  //second base case: if array is empty, return false
  if (!array.length) return false;
  //split recursion with accounting for and not accounting for the first value
  return subsetSum(array.slice(1), target - array[0]) || subsetSum(array.slice(1), target)

} 
  // if(array.length === 1) {
  //   return array;
  // } else {

  // }
  
  // const arr = [];
  // const arr2 = [];
  // let sum = array[0];
  // for (let i = 0; i < array.length-1; i++) {
  //   for(let j = i+1; j < array.length; j++) {
      
  //     let num = array[i] + array[j];
  //     arr.push(num)
  //     if (i === 0) {
  //       sum += array[j]
  //       arr2.push(sum)
  //     }
      
  //   }
  // }
  // return arr.concat(arr2);


  //if value in array === target, return true
  //else return false



console.log(subsetSum([3, 7, 4, 2], 5)) //- > true, 3 + 2 = 5
console.log(subsetSum([3, 34, 4, 12, 5, 12], 32)) // -> true, 3 + 12 + 5 + 12 = 32
console.log(subsetSum([8, 2, 4, 12], 13)) // -> false
console.log(subsetSum([8, -2, 1, -3], 6)) // -> true, 8 + 1 + (-3) = 6
module.exports = subsetSum;
