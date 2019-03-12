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
  let parens = {
    '{': '}',
    '(': ')',
    '[': ']'
  }
  const OPEN = Object.keys(parens);
  const CLOSE = Object.values(parens);

  let stack = [];

  for (let i = 0; i < input.length; i += 1) {
    let curChar = input[i]
    if (OPEN.includes(curChar)) {
      stack.push(curChar)
    } else if (CLOSE.includes(curChar)) {
      if (!stack.length) return false;
      let stackTop = stack.pop()
      if (parens[stackTop] !== curChar) return false;
    }
  }
  if (stack.length !== 0) return false;
  return true;
}

module.exports = balancedParens;
