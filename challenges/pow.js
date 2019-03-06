/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power = 1) {
    // case for 0 to the 0 power
    if (base === 0 && power === 0)
        return NaN;
    // base case for base being 0
    if (base === 0 && power > 0) 
        return 0;
    // base case for any number to the 0 power = 1
    if (power === 0)
        return 1;
    // recursion base case for positive powers
    if (power === 1)
        return base;
    // recursion base case for negative powers
    if (power === -1)
        return 1/base;
    if (power > 1)
        return base * pow(base, power - 1);
    else if (power < 0)
        return (1/base) * (1 / pow(base, 0 - power - 1));
}

//debugging
// console.log(pow(2,-1));

module.exports = pow;
