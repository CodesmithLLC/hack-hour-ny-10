// Write a function that takes a number as an argument and returns its english word representation as a string. Answers should be in upper camel case (a.k.a. Pascal case). Don't worry about spaces.
// Include support for 11-19 ('Eleven', 'Twelve', 'Thirteen', ... 'Nineteen').


/**
 * numToWords(0) -> 'Zero'
 * numToWords(43) -> 'FortyThree'
 * numToWords(2999) -> 'TwoThousandNineHundredNintyNine'
 * numToWords(15) -> 'Fifteen'
 * numToWords(2483579411) -> 'TwoBillionFourHundredEightyThreeMillionFiveHundredSeventyNineThousandFourHundredEleven'
 * numToWords(300525151340440) -> 'ThreeHundredTrillionFiveHundredTwentyFiveBillionOneHundredFiftyOneMillionThreeHundredFortyThousandFourHundredForty'
 * numToWords(92120000000000000) -> 'NintyTwoQuadrillionOneHundredTwentyTrillion'
 */

//not complete


function numToWords(num) {
  const oneTo19 = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine','Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eightteen', 'Nineteen'];
  const tens = ['Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
  const hundreds = ['Hundred', 'Thousand', 'Million', 'Billion', 'Trillion', 'Quadrillion'];
  
  let numStr = '';

  let string = num.toString();
  let array = string.split('') 
  console.log(array)

  const isTruthy = (item) => {
    return item
  }

}
//console.log(numToWords(0))  //-> 'Zero'
console.log(numToWords(43))  // -> 'FortyThree'
// console.log(numToWords(2999))  // -> 'TwoThousandNineHundredNintyNine'
// console.log(numToWords(15))  // -> 'Fifteen'
//console.log(numToWords(92120000000000000)) //-> 'NintyTwoQuadrillionOneHundredTwentyTrillion'



module.exports = numToWords;
