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
  //initialize two counts, one for parens, one for brackets
  //every '(' adds to parensCount, every ')' subtracts
  //if either count is ever negative, return false
  //if the final counts aren't zero, return false
  //else return true
  let parenCount = 0;
  let brackCount = 0;
  let curlCount = 0;
  let map = {
    '(':function(){parenCount++},
    ')':function(){parenCount--},
    '[':function(){brackCount++},
    ']':function(){brackCount--},
    '{':function(){curlCount++},
    '}':function(){curlCount--}
  }

  for (let char of input){
    if (parenCount < 0 || brackCount < 0 || curlCount < 0) return false
    if (map[char]) map[char]()
  }

  if (parenCount !== 0 || brackCount !== 0 || curlCount !== 0) return false
  return true;
}

module.exports = balancedParens;
