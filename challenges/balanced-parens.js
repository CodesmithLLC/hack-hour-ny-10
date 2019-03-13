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

function balancedParens(str){
    let stack = [];
    let map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    for (let i = 0; i < str.length; i++) {
      if (str[i] === '(' || str[i] === '{' || str[i] === '[') {
        stack.push(str[i]);
      } else if (str[i] === ')' || str[i] === '}' || str[i] === ']') {
        let last = stack.pop();
        if (str[i] !== map[last]) {return false};
      }
    }
    if (stack.length !== 0) {return false};

    return true;
}

module.exports = balancedParens;
