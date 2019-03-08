/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power, output = 1) {
    if (power === 0) {
        return output;
    }
    output = output * base;
    power--;
    return pow(base, power, output)
}

module.exports = pow;
