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
    const sum  = array.reduce((a, b) => a + b, 0);
    const mean = Math.floor(sum / array.length);
    const cache = {};
    let mode = 0;
    for (let i = 0; i < array.length; i += 1) {
        if (!cache[array[i]]) cache[array[i]] = 1;
        else cache[array[i]]++;
    }
    console.log(cache)
    for (let key in cache) {
        if (cache[key] > mode) mode = key;
        if (cache[key] == mode) mode = Math.max(key, mode);
    }
    console.log(`The mean is: ${mean}`);
    console.log(`The mode is: ${mode}`);
    return mean == mode;
}

console.log(modemean([3, 4, 5, 5, 5, 6, 7]))
console.log(modemean([1, 2, 2, 2, 3, 4, 5, 6, 7, 7, 7, 7]))

module.exports = modemean;
