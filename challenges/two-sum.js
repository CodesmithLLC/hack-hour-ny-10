/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

// function twoSum(arr, n) {
//   for (let i=0; i<arr.length; i++) {
//     for (let x=i+1; x<arr.length; x++) {
//       if (arr[i] + arr[x] === n) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

// faster solution

function twoSum(arr, n) {
  let sums = [];
  let hashTable = {};

  for (let i=0; i<arr.length; i++) {

    let sumMinusElement = n - arr[i];

    if (hashTable[sumMinusElement] !== undefined) {
      sums.push([arr[i], sumMinusElement])
    }

    hashTable[arr[i]] = arr[i]
  }
  if (sums.lenght) return true
  else return false;
}

module.exports = twoSum;
