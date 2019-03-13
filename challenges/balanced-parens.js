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
    // input = input.replace(/[^\(\)\[\]\{\}]/g,"");
    console.log(input)
    let balanced = false;
    let parensCounter = 0;
    let bracketsCounter = 0;
    let curlyCounter = 0;
    let firstParens = 0;
    let lastParens = 0;
    for (let index = 0; index < input.length; index++) {
        if (input[index] === "(")  {
            firstParens = index;
            break;
        }
    }
    for (let index = input.length - 1; index > firstParens; index--) {
        if (input[index] === ")")  {
            lastParens = index;
            break;
        }
    }
    if (firstParens >= lastParens) {
        return false
    }
    for (let index = firstParens; index <= lastParens; index++){
        if (input[index] === "(") 
            parensCounter +=1;
        else if (input[index] === ")") 
            parensCounter -= 1;
        else if (input[index] === "{") 
            curlyCounter += 1;
        else if (input[index] === "}") 
            curlyCounter -= 1;
        else if (input[index] === "[") 
            bracketsCounter += 1;
        else if (input[index] === "]") 
            bracketsCounter -= 1;
        console.log(input[index],parensCounter )
    } 
    if (!parensCounter && !bracketsCounter && !curlyCounter)
        balanced = true;
    return balanced;
}

console.log(balancedParens(''));

module.exports = balancedParens;
