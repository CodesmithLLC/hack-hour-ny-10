/**
 * Write a function that will take an array of integers, all of which will appear exactly twice,
 * except for one integer that will appear exactly once. Return the integer that appears once.
 *
 * uniqueNumber([1,2,1,3,3]); -> 2
 *
 * BONUS:
 * Complete the challenge in O(n) time
 * Complete the challenge in O(1) space
 *
 */
function uniqueNumber(array) {
  // let result = new Set();
  // //iterate through array
  // for(let el of array) {
  //   let v = el;
  //   if(result.has(v)) { //even occurences
  //     result.delete(v)
  //   } else {
  //     result.add(v);
  //   }
  // }
  // console.log(result)
}


console.log(uniqueNumber([1,2,1,3,3,1,2, 4])); //-> 2

module.exports = uniqueNumber;




//O(n) time and space approach
// function uniqueNumber(array) {
//   const obj = {}
//   for (let el of array) {
//     if (!obj[el]) obj[el] = 1;
//     else obj[el] += 1;
//   }

//   for (let key in obj) {
//     if (obj[key] === 1) {
//       return key
//     }
//   }
// }