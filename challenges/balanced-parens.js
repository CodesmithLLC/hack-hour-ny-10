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

function balancedParens(input){
  const stack = [];
  const match = {
    '{': '}',
    '(': ')',
    '[': ']'
  }

  for (let i = 0; i < input.length; i += 1) {
    const currentChar = input[i];
    if (Object.keys(match).includes(currentChar)) {
      stack.push(currentChar);
    } else if(match[stack[stack.length - 1]] === currentChar) {
      stack.pop();
    }
  }
  return stack.length === 0;
}

// console.log('expect false:', balancedParens('('));  // false
// console.log('expect true:', balancedParens('()')); // true
// console.log('expect false:', balancedParens(')('));  // false
// console.log('expect true: ', balancedParens('(())'));  // true

// console.log('expect true:', balancedParens('[](){}')); // true
// console.log('expect true: ', balancedParens('[({})]'));   // true
// console.log('expect false:', balancedParens('[(]{)}')); // false

// console.log('expect true:', balancedParens(' var wow  = { yo: thisIsAwesome() }')); // true
// console.log('expect false:', balancedParens(' var hubble = function() { telescopes.awesome();')); // false

module.exports = balancedParens;
