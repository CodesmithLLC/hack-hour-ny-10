/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */
//not complete, answer below
function maxSubarray(arr) {
  let forwardMax = -Infinity;
  let backwardMax = -Infinity;
  let middleMax = -Infinity;
  let middleSum = 0;
  let forwardSum = 0;
  let backwardSum = 0;
  const forwardArr = arr;
  const middleArr = arr;
  const backwardArr = arr.slice(0, arr.length-1);
  while (forwardArr.length !== 0) {
    for(let el of forwardArr) {
      forwardSum += el
    }
    if (forwardSum > forwardMax) {
      forwardMax = forwardSum;
      forwardSum = 0;
    } else forwardSum = 0;
    forwardArr.shift();
  }
  console.log(forwardMax)
  while (backwardArr.length !== 0 ) {
    for(let i = backwardArr.length-1; i > 0; i--) {
      backwardSum += backwardArr[i]
    }
    if (backwardSum > backwardMax) {
      backwardMax = backwardSum;
      backwardSum = 0;
    } else backwardSum = 0;
    backwardArr.pop();
  }
  console.log(backwardMax)
  while (middleArr.length !== 0) {
    console.log(middleArr)
    
    middleArr.pop();
    middleArr.shift();
    if (middleArr.length === 0)
    for (let el in middleArr) {
      middleSum += el;
    }
    if (middleSum > middleMax) {
      middleMax = middleSum;
      middleSum = 0;
    } else middleSum = 0;
  }
  console.log(middleMax)
}
    
//     if (sumForward > backwardArr)
//     //console.log(backwardSum)
//   //   console.log(sum)
//   //   if (sum > max) {
//   //     max = sum;
//   //     sum = 0;
//   //   }
//   //   el = arr.shift();
//   //   newArr.push(el)
//   // }
// //   while (newArr.length !== 0) {
// //     let newLen = newArr.length - 1;

// //     for(let el of arr) {
// //       sum += el
// //     }
// //     console.log(sum)
// //     if (sum > max) {
// //       max = sum;
// //       sum = 0;
// //     }
// //     el = arr.shift();
// //     newArr.push(el)
// //   }


// //   console.log(sum)


console.log(maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]))
//console.log(maxSubarray([15,20,-5,10]))

module.exports = maxSubarray;




// function maxSubarray(arr) {
//   if (arr.length === 0) return 0;

//   // initiate local sum and global sum trackers
//   let finalSum = 0;
//   let currSum = 0;

//   for (let i = 0; i < arr.length; i++){
//     // add current element to currSum 
//     // update current sum based on whichever value is bigger - that way we always keep track of the maximum local sum at each iteration
//     currSum = Math.max(arr[i], currSum += arr[i]);
//     // update final sum based on whichever value is bigger so that we get a final max sum at the end
//     finalSum = Math.max(finalSum, currSum);
//   }
  
//   return finalSum;
// }