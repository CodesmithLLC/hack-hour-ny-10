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

//check if beginning is reverse of end
//check if space exists between them 


function matchWord(str) {
  let newStr = str.replace(/[~`!@#$%^&*(){}\[\];:"'<,.>?\/\\|_+=-]/g, ' ').toLowerCase();
  console.log(newStr)
  const arr = Array.from(newStr);
  //if (arr.includes(" ")) {
    //console.log(arr)
    let wordCheckLeft = '';
    let wordCheckRight = '';
    let wrongCount = 0;
    for (let i = 0; i < arr.length / 2; i++) {
      let left = arr[i];
      let right = arr[arr.length - 1 - i];
      if (left === right) {
        wordCheckLeft.concat(left);
        wordCheckRight.concat(right);
      } else {
        wrongCount += 1;
        break;
      }
    }

    console.log('right', wordCheckRight, 'left', wordCheckLeft, 'wrong', wrongCount)

}
  //   // return true
  //   }
  // } else {
  //   return false;
  // }
 //console.log(wordCheck)




matchWord('__END_DNE-----');  //-> true
// matchWord('__ENDDNE__');  //-> false       (not separated by a space)
// matchWord('IF()()fi[]');  //-> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  //-> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  //-> true
// matchWord('');  //-> true

module.exports = matchWord;
