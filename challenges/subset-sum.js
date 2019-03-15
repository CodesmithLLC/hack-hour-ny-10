/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 subsetSum([3, 7, 4, 2], 5) //-> true, 3 + 2 = 5
 subsetSum([3, 34, 4, 12, 5, 12], 32) //-> true, 3 + 12 + 5 + 12 = 32
 subsetSum([8, 2, 4, 12], 13) //-> false
 subsetSum([8, -2, 1, -3], 6) //-> true, 8 + 1 + (-3) = 6
 */

function subsetSum(array, target) {
  //make a map, for each new num, check to see if the difference between the new num and the target is in the map
  const map = {};

  for (let i = 0; i < array.length; i++) {
    let cand = array[i];
    let diff = target - cand;
    if (map[diff] || cand === target) {
      // console.log(map)
      return true;
    }

    for (let entry in map) {
      let candNum = parseInt(entry);
      let newEntry = candNum + cand;
      map[newEntry] = 1;
    }
    map[cand] = 1;
    // console.log(map)
  }
  // console.log(map);
  return false;
}

//  console.log(subsetSum([3, 7, 4, 2], 5)) //-> true, 3 + 2 = 5
//  console.log(subsetSum([3, 34, 4, 12, 5, 12], 32)) //-> true, 3 + 12 + 5 + 12 = 32
//  console.log(subsetSum([8, 2, 4, 12], 13)) //-> false
//  console.log(subsetSum([8, -2, 1, -3], 6)) //-> true, 8 + 1 + (-3) = 6

module.exports = subsetSum;
