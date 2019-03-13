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
    if(input === '') return true;
    let obj = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    let stack = [];
    let str = getParens(input);
    if(str[0] === ')' || str[0] === '}' || str[0] === ']')
        return false;
    stack.push(str[0]);
    for(let i = 1; i < str.length; i++) {
        if(stack.length !== 0) {
            let last = stack[stack.length-1];
            let item = str[i];
            if(obj[last] === item) stack.pop();
            else stack.push(item);
        } else stack.push(str[i]);
    }
    if(stack.length === 0) return str + ' ' + true;
    else return str + ' ' + false;
}

function getParens(string) {
    let str = '';
    for(let i = 0; i < string.length; i++) {
        let item = string[i];
        if(item === '(' || item === ')' 
        || item === '{' || item === '}'
        || item === '[' || item === ']') {
            str += item;
        }
    } return str;
}

//console.log(balancedParens('[]'));
//console.log(balancedParens('[][][]{{}}'))

module.exports = balancedParens;
