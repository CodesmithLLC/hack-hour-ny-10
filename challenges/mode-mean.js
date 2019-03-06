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
    array.sort(function(a, b) {
        return a - b;
      });
    let sum = 0;
    let obj = {}
    for (let i=0; i<array.length; i++) {
        sum += array[i];
        if (!obj[array[i]]) {
            obj[array[i]] = 1;
        } else {
            obj[array[i]]++
        }
    }

    let average = Math.floor(sum / array.length)
    let mode;
    let count = 1;
    for (let key in obj) {
        if (obj[key] > count) {
            count = obj[key]
            mode = key
        }
    }
    if (average == mode) {
        return true;
    } else {
        return false;
    }
}

module.exports = modemean;

// function modemean(array){
//     const cache = { 
//       mode: { value: null, length: 1 },
//       mean: { value: array[0], sum: array[0] }
//     };
//     for (let i = 0; i < array.length; i += 1) {
//       const { mode, mean } = cache;
//       const value = array[i];
//       // cache[value] is the amount of times the number has appeared
//       mean.sum += value;
//       mean.value = mean.sum / (i + 1);
//       if (value in cache) {
//         cache[value] += 1;
//         if (cache[value] > mode.length || 
//             cache[value] === mode.length 
//             && value >= mode.value){
//           mode.value = value;
//           mode.length = cache[value];
//         }
//       } else {
//         cache[value] = 1;
//         if (value > mode.value && mode.length === 1) {
//           mode.value = value;
//         }
//       }
//     }
  
//     return cache.mode.value === Math.floor(cache.mean.value);
//   }