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
