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
    const threes = ['Thousand', 'Million', 'Billion', 'Trillion'];
    const double = ['Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    const single = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    const tens = ['Ten', 'Twenty', 'Thirty', 'Fourty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninty'];
    let str = '';
    if(num < 10) return single[num];
    const n = num.toString();
    let count = 0;
    let temp = '';
    for(let i = n.length-1; i >= 0; i--) {
        count++;
        if(count%3 === 1) {
            if(n[i] === '0') continue;
            temp = n[i];
            if(i === 0) str = single[parseInt(temp)] + str;
        }
        if(count%3 === 2) {
            if(n[i] === '0') continue;
            else if(n[i] === '1' && temp === '') temp = 'Ten';
            else if(n[i] === '1' && temp !== '') temp = double[parseInt(temp) - 1];
            else if(n[i] !== '1' && temp === '') temp = tens[parseInt(n[i])-1];
            else temp = tens[parseInt(n[i])-1] + single[parseInt(temp)];
            if(i === 0) str = temp + str;
        }
        if(count%3 === 0) {
            if(n[i] !== '0') temp = single[parseInt(n[i])] + 'Hundred' + temp;
            str = temp + str;
            if(i !== 0) str = threes[(count/3) - 1] + str;
            temp = '';
        }
    } return str;
}

//console.log(numToWords(2146115));

module.exports = numToWords;
