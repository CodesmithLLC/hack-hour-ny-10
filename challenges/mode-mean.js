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
    const mean = Math.floor(array)
    const mode = new Number
    let dict = {}

    for (let i = 0; i < array.length; i++){
        if(dict[array[i]]){
            dict[array[i]] += 1
        }
        else {
            dict[array[i]] = 1
        }
    }
    for (let i = 0; i<dict.length; i ++) {
        console.log("hi")
        console.log(dict[i])
    }
}

modemean([7,7,8,5,5,5,1,2,3,4])
module.exports = modemean;
