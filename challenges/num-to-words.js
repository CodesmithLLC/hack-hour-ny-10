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
  if (num === 0) return "Zero";
  const firstMap = {
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine"
  };
  const hybridMap = {
    10: "Ten",
    11: "Eleven",
    12: "Twelve",
    13: "Thirteen",
    14: "Fourteen",
    15: "Fifteen",
    16: "Sixteen",
    17: "Seventeen",
    18: "Eighteen",
    19: "Nineteen"
  };
  const secondMap = {
    2: "Twenty",
    3: "Thirty",
    4: "Forty",
    5: "Fifty",
    6: "Sixty",
    7: "Seventy",
    8: "Eighty",
    9: "Ninety"
  };
  const modMap = {
    3: "",
    6: "Thousand",
    9: "Million",
    12: "Billion",
    15: "Trillion",
    18: "Quadrillion"
  };
  //deal with groups of three seperately. each group of three calls a helper function that deals with the base answer
  //while the main function appends the right modifier (thousand, million, billion, etc.)
  let answer = "";
  let numStr = num + "";
  console.log(num);
  while (numStr.length % 3 !== 0) {
    numStr = "0" + numStr;
  }

  let count = numStr.length;
  console.log(numStr, count);
  while (count > 0) {
    console.log(
      count,
      answer,
      numStr.slice(numStr.length - count, numStr.length - count + 3)
    );
    answer =
      answer +
      helper(numStr.slice(numStr.length - count, numStr.length - count + 3)) +
      modMap[count];
    count -= 3;
  }

  function helper(triplet) {
    //expects a string like '013'
    console.log("trip", triplet);
    let output = "";
    const firstDig = parseInt(triplet[0]);
    const secondDig = parseInt(triplet[1]);
    const thirdDig = parseInt(triplet[2]);
    if (firstDig) {
      output = firstMap[firstDig] + "Hundred";
    }
    if (secondDig === 1) {
      output = output + hybridMap[10 + thirdDig];
    } else {
      if (secondDig) {
        output = output + secondMap[secondDig];
      }
      if (thirdDig) {
        output = output + firstMap[thirdDig];
      }
    }
    return output;
  }

  return answer;
}

module.exports = numToWords;
