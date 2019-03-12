/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

function balancedParens(input) {
  const closedParensRegex = /\}|\)|\]/;
  const openParensRegex = /\{|\(|\[/;

  if (input.length % 2 === 1) return false;

  if (
    closedParensRegex.test(input[0]) ||
    openParensRegex.test(input[input.length - 1])
  ) {
    return false;
  }

  const parensCount = input.split("").reduce((acc, el) => {
    if (closedParensRegex.test(el) || openParensRegex.test(el)) {
      if (!acc[el]) {
        acc[el] = 0;
      }
      acc[el] += 1;
      return acc;
    }
  }, {});

  if (
    parensCount[")"] === parensCount["("] &&
    parensCount["}"] === parensCount["{"] &&
    parensCount["["] === parensCount["]"]
  )
    return true;
  else {
    return false;
  }
}

console.log(balancedParens("(")); // false
console.log(balancedParens("()")); // true
console.log(balancedParens(")(")); // false
console.log(balancedParens("(())")); // true
console.log(balancedParens("[](){}")); // true
console.log(balancedParens("[({})]")); // true
console.log(balancedParens("[(]{)}")); // false
console.log(balancedParens(" var wow  = { yo: thisIsAwesome() }")); // true
module.exports = balancedParens;
