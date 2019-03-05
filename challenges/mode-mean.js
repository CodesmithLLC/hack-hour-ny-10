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
    let modes = {};
    let highestOccurence = 0, mean, mode;

    mean = Math.floor(array.reduce((mean, currentNumber) => {
        if (!modes[currentNumber]) modes[currentNumber] = 1;
        else modes[currentNumber]++;
        if (modes[currentNumber] > highestOccurence) highestOccurence = modes[currentNumber];
        mean += currentNumber;
        return mean;
    }, 0) / array.length);
    
    modes = Object.entries(modes).reduce((mode, curr) => {
        if (mode[curr[1]] !== highestOccurence) delete mode[curr[1]];
        return mode;
    }, modes);
    
    mode = Math.max(...Object.keys(modes).map(Number))
    
    // console.log(mode, mean)
    // return whether or not mode is equal to mean
    return mode === mean;
}

console.log(modemean([3,3,3]))
console.log(modemean([0,2,3,4,5]))
// console.log(mean)
// console.log(modemean([1,1,1,3,3,2]))

module.exports = modemean;
