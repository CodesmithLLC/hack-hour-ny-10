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
    let mode = {
        number: null,
        value: null
            }
    let mean = 0
    let numbersObject = {} ;
    for (let index in array) {
        if (Object.keys(numbersObject).includes(array[index].toString())) numbersObject[array[index]] += 1;
        else numbersObject[array[index]] = 1;
    }
    console.log(numbersObject)
    for (let key in numbersObject) {
        if (mode.value === null || numbersObject[key] >= mode.value) {
            mode.value = numbersObject[key];
            if (key > mode.number)  mode.number = key;
        }
    }
    console.log(mode)
    mean = array.reduce((cum, current) => {return cum + current;}) / array.length;
    console.log(mean)
    if (mean.toString() === mode.number) return true;
    else return false;
}

// console.log(modemean([1,1,2,3,4,7]))
// console.log(modemean([1,2,2,3]))

module.exports = modemean;
