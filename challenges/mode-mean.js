/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */


function modemean(array) {
  let meanNum = mean(array);
  let modeNum = mode(array);
  if (meanNum === modeNum) {
      return true; 
    } else {
    return false;
    }
}

function mean(array){
  
  const sum = array.reduce(function(sum, el){
    return sum += el;
  })
  console.log("mean: ", Math.floor(sum/array.length))
  return Math.floor(sum/array.length)
}

function mode(array) {
  let obj = {};
  let maxCount = 1;
  let mode;
  
  for(let i = 0; i < array.length; i++) {
    if(!obj[array[i]]) {
      //count;
      obj[array[i]] = 1;
    } else {
      obj[array[i]] += 1;
    }
  }

  for (let key in obj) {
    if(obj[key] > maxCount) {
      mode = key;
      maxCount = obj[key]; 
  }
}


  console.log("mode: ", mode);
  return Number(mode);
}

//console.log(mean([1,2,3,1]));  //--> 1
//console.log(mode([1,2,3,1,1,2]));  //--> 1
console.log(modemean([1,2,3,1]));  //mean-->1, mode-->1, true
console.log(modemean([1,2,3,1,2,2]));  //mean-->1, mode-->2, false



module.exports = modemean;
