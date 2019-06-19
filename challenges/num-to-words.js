// Write a function that takes a number as an argument and returns its english word representation as a string. Answers should be in upper camel case (a.k.a. Pascal case). Don't worry about spaces.
// Include support for 11-19 ('Eleven', 'Twelve', 'Thirteen', ... 'Nineteen').

/**
 * numToWords(0) -> 'Zero'
 * numToWords(43) -> 'FortyThree'
 * numToWords(2999) -> 'TwoThousandNineHundredNintyNine'
 * numToWords(15) -> 'Fifteen'
 * numToWords(2483579411) -> 'TwoBillionFourHundredEightyThreeMillionFiveHundredSeventyNineThousandFourHundredEleven'
 * numToWords(300525151340440) -> 'ThreeHundredTrillionFiveHundredTwentyFiveBillionOneHundredFiftyOneMillionThreeHundredFortyThousandFourHundredForty'
 * numToWords(92,120,000,000,000,000) -> 'NintyTwoQuadrillionOneHundredTwentyTrillion'
 */

function numToWords(num) {
  const ONES = [
    '',
    'One',
    'Two',
    'Three',
    'Four',
    'Five',
    'Six',
    'Seven',
    'Eight',
    'Nine'
  ];
  const TENS = [
    '',
    'Ten',
    'Twenty',
    'Thirty',
    'Forty',
    'Fifty',
    'Sixty',
    'Seventy',
    'Eighty',
    'Ninety'
  ];
  const PLACES = [
    '',
    'Thousand',
    'Million',
    'Billion',
    'Trillion',
    'Quadrillion'
  ];

  function numToWords(num) {
    if (!num) return 'Zero';
    str = String(num);
    while (str.length % 3) {
      str = '0' + str;
    }
    return recurringNum(str)
      .replace('TenOne', 'Eleven')
      .replace('TenTwo', 'Twelve')
      .replace('TenThree', 'Thirteen')
      .replace('TenFour', 'Fourteen')
      .replace('TenFive', 'Fifteen')
      .replace('TenSix', 'Sixteen')
      .replace('TenSeven', 'Seventeen')
      .replace('TenEight', 'Eighteen')
      .replace('TenNine', 'Nineteen');
  }

  function recurringNum(str) {
    if (!str.length) return '';
    let nextNums = str.slice(0, 3);
    let nextWords;
    if (nextNums === '000') {
      nextWords = '';
    } else {
      let placesIndex = Math.floor(str.length / 3) - 1;
      nextWords = parseThreeDigits(nextNums) + PLACES[placesIndex];
    }
    return nextWords + recurringNum(str.slice(3));
  }

  function parseThreeDigits(digits) {
    let words;
    if (digits >= 100) {
      words = ONES[digits[0]] + 'Hundred' + TENS[digits[1]] + ONES[digits[2]];
    } else if (digits >= 10) {
      words = TENS[digits[1]] + ONES[digits[2]];
    } else {
      words = ONES[digits[2]];
    }
    return words;
  }
}

module.exports = numToWords;
