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

function romanNumeral(n) {
    if (n <= 0 ) return; 

   let  transTable = Array.from ([
        [ 1000, 'M'],
        [ 900, 'CM'],
        [ 500, 'D'],
        [ 400, 'CD'],
        [ 100, 'C'],
        [ 90, 'XC'],
        [ 50, 'L'],
        [ 40, 'XL'],
        [ 10, 'X'],
        [ 9, 'IX'],
        [ 5, 'V'],
        [ 4, 'IV'],
        [ 1, 'I']
    ])

    let startIndex = 0 
    let result = '' ; 

    
    while (n > 0 ){
        for ( let i = 0 ; i < transTable.length ; i ++ ){
         //console.log(`in the loop:  i=${i} n = ${transTable[i][0]} result = ${result}`)
            if (transTable[i][0] <=  n) {
                 startIndex = i; 
                result += transTable[i][1]
                n -= transTable[i][0]
            break; 
             }
         }
      transTable.splice(0,startIndex)
     // console.log(`startIndex=${startIndex} num = ${num} result = ${result}`)
    }

    return result;
}

module.exports = romanNumeral;
