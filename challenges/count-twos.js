// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive).
// For example: countTwos(3) should be 1 because there are no 2s in the number one. There is One 2 in the number two and no 2s in the number three.
// Each 2 should be counted. For instance,  the number 2222 has four 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483

/*
Challenge: Write a function that takes a number as an argument, n. The function will return thenumber of 2's encoutered when counting from 1 to n
*/

/* method 2 - optimized linear approach*/

function countTwos(num) {
  var totalTwos = 0;
  let numString = num.toString();
  let digitsPlace = numString.length;

  for (let i = 0; i < numString.length; i++) {
    /* STRIP NUM STRING TO GET DIGIT + PLACE IN STRING */
    // get current digit, ex: 1 of 152
    let currentDigit = Number(numString[i]);

    // get base, ex: 100 = 1 in 152
    let baseDigit = currentDigit * 10 ** (digitsPlace - 1);

    // Count the number of twos in the base value
    // ex: 100 -> 100 has 20 twos,
    // ex: 50 -> base is 1 * current number (5) -> 5
    const baseCountTwos =
      currentDigit * (digitsPlace - 1) * 10 ** (digitsPlace - 2);

    // Add baseCountTwos to totalTwos counter.
    console.log(
      'calculate base digit',
      (digitsPlace - 1) * 10 ** (digitsPlace - 2)
    );
    totalTwos += baseCountTwos;
    console.log('TOTAL TWOS: ', totalTwos);

    // Store remaining: 152 - 100 = 52
    const remaining = num - baseDigit;

    /* CHECK VALUE OF CURRENT DIGIT, ADJUST ACCORDINGLY */
    // if currentDigit is 2, get total twos in base and account for fist digit
    // ex1: 2 of 152 === 1... so, base of 0 + 1 two that is remaining between between 1 - 9.
    // ex2: 2 of 121 === 2 (12, 20), so base of 2 + 1 two that is remaining between 1 - 9
    if (currentDigit === 2) totalTwos += remaining + 1;

    // if currentDigit is greater than 2, take base + number of twos in digitsPlace
    // First, take base twos: 50 -> (2, 12, 22, 32, 42) = 5 (calculate above)
    // Next, Account for missing twos in digits place: 20 - 29 = 1
    if (currentDigit > 2) totalTwos += Math.pow(10, digitsPlace - 1);

    console.log(
      'Input:',
      num,
      '|',
      'baseDigit',
      baseDigit,
      ',',
      'currentDigit:',
      currentDigit,
      '->',
      'total twos in base:',
      (digitsPlace - 1) * 10 ** (digitsPlace - 2),
      '*',
      'currentDigit:',
      currentDigit,
      '=',
      'baseCountTwos',
      baseCountTwos
    );
    // reduce num to next digits place 152 becomes 52, 52 become 2
    num = remaining;

    /* update digits place: 152 -> 152
                            ^       ^
    */
    digitsPlace--;
  }
  return totalTwos;
}

console.log('-------------------Optimized Approach--------------------');
// console.log(countTwos(50), 'f(150) -> 15');
// console.log(countTwos(13), 'f(13) -> 2');
console.log(countTwos(54), 'f(54) -> 16');

module.exports = countTwos;
