/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
 *
 *      1     ->    I
 *      4     ->    IV
 *      5     ->    V
 *      9     ->    IX
 *      10    ->    X
 *      40    ->    XL
 *      50    ->    L
 *      90    ->    XC
 *      100   ->    C
 *      400   ->    CD
 *      500   ->    D
 *      900   ->    CM
 *      1000  ->    M
 * 
 */

function romanNumeral(n, str = '') {
    let roman = {
        1    : "I",
        // 4    : "IV",
        5    : "V",
        // 9    : "IX",
        10   : "X",
        // 40   : "XL",
        50   : "L",
        90   : "XC",
        100  : "C",
        400  : "CD",
        500  : "D",
        900  : "CM",
        1000 : "M",
    }
    if (n === 0) return '';
    else if (roman[n]){
        return roman[n];
    }
    else {
        let highestKey = 0;
        let lowestKey = 0;
        for (let key in roman){
        // while (highestKey <= n){
            if (key < n) {
                highestKey = key;
            }
            if (key > n)
        }
        return roman[highestKey] + romanNumeral(n-highestKey);
    }
    // for (let key in roman){
    //     if (key <= n) console.log(key)
    // }
    // console.log(roman[n]);
}

// romanNumeral(1);
// romanNumeral(4);
// romanNumeral(5);
// romanNumeral(9);
console.log(romanNumeral(10));
console.log(romanNumeral(21));
// console.log(romanNumeral(11));
// console.log(romanNumeral(4));

module.exports = romanNumeral;
