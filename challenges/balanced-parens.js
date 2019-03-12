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
    const openChars = {
        '{': {count: 0 ,closing:'}' },
         '(': {count:0 ,closing:')'},
         '[': {count:0 ,closing:']'},
       } 
    const closedChars = new Set([')','}',']']);
    const stack = []; 

    let nextClosingExpected = '' ;  
    for (let i = 0; i < str.length; i += 1) {        
     if(str[i] in openChars) {
       stack.push(str[i])
       nextClosingExpected = openChars[str[i]].closing;
     }  else if(closedChars.has(str[i])){
         if(nextClosingExpected !== str[i] ) return false; 
         // if valid close 
         stack.pop()
         nextClosingExpected = stack.length === 0 ? '' : openChars[stack[stack.length-1]].closing
      } 
    }
    return stack.length === 0; 

}

module.exports = balancedParens;
