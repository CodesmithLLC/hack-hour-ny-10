// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", 
//i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that 
//takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or 
//punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
    const regex = RegExp('[a-zA-Z]');
    const parens = RegExp('[\(|\)|\{|\}|\[|\}|\]]');
    const obj = { '(':')', '{':'}', '[':']' }
    const stack = [];
    let word = '';
    for(let i = 0; i < str.length; i++) {
        if(regex.test(str[i]) || parens.test(str[i])) {
            if(regex.test(str[i])) {
                word += str[i];
                if(i === str.length-1) {
                    if(stack.length !== 0) {
                        const item = stack[stack.length-1];
                        if(word.toLowerCase() === item.split('').reverse().join('')) stack.pop();
                        else stack.push(word.toLowerCase());
                    }
                }
            } else {
                console.log(str[i]);
                if(word !== '') {
                    const w = word.toLowerCase();
                    word = '';
                    if(stack.length === 0) stack.push(w);
                    else {
                        const item = stack[stack.length-1];
                        if(w === item.split('').reverse().join('')) stack.pop();
                        else stack.push(w); 
                    }
                }
                if(stack.length === 0) stack.push(str[i]);
                else {
                    const item = stack[stack.length-1];
                    if(obj[item] === str[i]) stack.pop();
                    else stack.push(str[i]);
                }
            }
        } else {
            if(word !== '') {
                const w = word.toLowerCase();
                word = '';
                if(stack.length === 0) stack.push(w);
                else {
                    const item = stack[stack.length-1]; 
                    if(w === item.split('').reverse().join('')) stack.pop();
                    else stack.push(w);
                }
            }
        }
    }
    if(stack.length === 0) return true;
    else return false;
}
// console.log(matchWord('__END_DNE-----'));
// console.log(matchWord('__ENDDNE__'));
// console.log(matchWord('IF()()fi[]'));
// console.log(matchWord('for__if__rof__fi'));
// console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'));
// console.log(matchWord(''));

module.exports = matchWord;
