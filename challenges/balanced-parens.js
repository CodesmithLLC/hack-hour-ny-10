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
    const matches = {'}':'{', ')':'(', ']':'['}
    return input.split('').reduce((acc, curr) => {
        if (curr === '(' || curr === '[' || curr === '{'){
            acc.push(curr);
        } else if (acc[acc.length - 1] === matches[curr]){
            acc.pop();
        }
        return acc;
    }, []).length === 0;
}

// console.log(balancedParens('[](){}')); // true
// console.log(balancedParens('[(]{)}')); // false
// console.log(balancedParens('[({})]'));   // true
// console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }')); // true
// console.log(balancedParens(' var hubble = function() { telescopes.awesome();')); // false
module.exports = balancedParens;

