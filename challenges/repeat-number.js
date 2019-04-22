/**
 * I have an array where every number in the range 1...n appears once except for 
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

function repeatNumbers(array) {
  for (let i=0 ;  i < array.length; i++ ) {
    //console.log( `i=${i} my Value:${Math.abs(array[i])}  look at index: ${Math.abs(array[i])-1}  value is: ${array[Math.abs(array[i])-1]}  `)
    if( array[array[i]-1]  < 0 ) {
      return  array[i]
    }  else {
        array[Math.abs(array[i])-1]  = array[Math.abs(array[i])-1] * (-1)
    }
  }
}

module.exports = repeatNumbers;
