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

function numToWords(num) {
  const wordNums = {
    OneThousand: 1000,
    NineHundred: 900,
    EightHundred: 800,
    SevenHundred: 700,
    SixHundred: 600,
    FiveHundred: 500,
    FourHundred: 400,
    ThreeHundred: 300,
    TwoHundred: 200,
    OneHundred: 100,
    Ninety: 90,
    Eighty: 80,
    Seventy: 70,
    Sixty: 60,
    Fifty: 50,
    Fourty: 40,
    Thirty: 30,
    Twenty: 20,
    Nineteen: 19,
    Eighteen: 18,
    Seventeen: 17,
    Sixteen: 16,
    Fifteen: 15,
    Fourteen: 14,
    Thirteen: 13,
    Twelve: 12,
    Eleven: 11,
    Ten: 10,
    Nine: 9,
    Eight: 8,
    Seven: 7,
    Six: 6,
    Five: 5,
    Four: 4,
    Three: 3,
    Two: 2,
    One: 1,
  };
  let numWord = '';
  for (const key in wordNums) {
    while (num >= wordNums[key]) {
      numWord += key;
      num -= wordNums[key];
    }
  }
  return numWord;
}

module.exports = numToWords;
