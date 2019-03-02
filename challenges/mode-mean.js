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
    let mode = [];
    let seen = [];
    let mean = 0;
    // iterate through array to gather necessary values
    for (let i = 0; i < array.length; i++){
        if (!seen.includes(array[i])) seen.push(array[i]);
        else mode.push(array[i]);
        mean += array[i];
    }
    // calculate mean
    mean = Math.floor(mean / array.length);
    
    // calculate mode
    mode = mode.length === 0 ? Math.max(...seen) : Math.max(...mode)
    
    // return whether of not mode is equal to mean
    return mode === mean;
}

// console.log(modemean([3,3,3]))
// console.log(modemean([0,2,3,4,5]))
// console.log(modemean([0,3,3,4,5]))

module.exports = modemean;
