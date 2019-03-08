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
    if(array === undefined) return false;
    if(array.length === 1 || array.length === 0) return true;
    const mean = Math.floor(array.reduce((sum, item) => {
        return sum += item;
    },0)/array.length);
    const data = array.reduce((o, item) => {
        if(!(item in o)) o[item] = 1;
        else o[item]++;
        return o;
    },{});
    const mode = { key: 0, value: 0 };
    for(let key in data) {
        if(data[key] >= mode.value) {
            mode.value = data[key];
            mode.key = key;
        }
    }
    const sum = array.reduce((sum, item) => { return sum += item; },0)
    console.log('mode:', mode.key, 'mean:', mean, 'sum:',sum,'/',array.length);
    if(parseInt(mode.key) === mean) return true;
    else return false;
}
// console.log(modemean([1,2,3,4,4,4,4,4,4,4,4,4,4,5,6,7,54]));
// console.log(modemean([1,1,1,1,1,1,1,1]));
// console.log(modemean([]));

module.exports = modemean;
