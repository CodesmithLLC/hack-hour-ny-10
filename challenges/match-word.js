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
  str = str.toLowerCase()
  str = str.concat('*')
  let ends = []
  let stack = []
  let regex = new RegExp('[a-z]')
  let lP = 0
  let rP = 0
  while (rP <= str.length) {
    console.log(str[lP],' *** ' ,str[rP])
    if (regex.test(str[rP]) && regex.test(str[lP])) {
      rP += 1
    } else if (!regex.test(str[rP]) && regex.test(str[lP])) {
      let subStr = str.substring(lP, rP) 
      console.log(subStr)
      let reverse = subStr.split('').reverse().join('')
      if (ends.includes(subStr)) {
        if (stack[stack.length-1] === reverse) {
          stack.pop()
        } else {
          return false
        }
      } else {
        // push to top of stack and add reverse to ends
        stack.push(subStr)
        ends.push(reverse)
      }
      lP = rP;
      rP += 1
    } else if (!regex.test(str[rP]) && !regex.test(str[lP])) {
      rP += 1
      lP += 1
    } else if (regex.test(str[rP]) && !regex.test(str[lP])) {
      lP = rP
      rP += 1
    }
  }
  if (stack.length) return false
  return true

}
module.exports = matchWord;
