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
    if (!str)
      return true
    str = str.replace(/[\W\s_]+/g," ");
    str = str.replace(/^[\s]/,"");
    str = str.replace(/[\s]$/,"");
    console.log(str)
    str = str.toLowerCase();
    let words = str.split(" ");
    let traverseArray = [];
    for (let index = 0; index < words.length; index++){
      if (!traverseArray.length || words[index].split("").reverse().join("") !== traverseArray[traverseArray.length-1])
        traverseArray.push(words[index])
      else {
          traverseArray.pop();
        }
    }
    if (traverseArray.length)
        return false;
    return true;
    console.log(words)
}

console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'));
console.log(matchWord('__ENDDNE__'));
console.log(matchWord('__END_DNE-----'));
console.log(matchWord('IF()()fi[]'));
console.log(matchWord('for__if__rof__fi'));
module.exports = matchWord;
