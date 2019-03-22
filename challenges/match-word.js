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

  let current = 0;
  const stack = [];

  //main loop moving forward in string
  while (current < str.length) {
    //while current is not a letter, ...current pointer 
    while (str[current] && !str[current].match(/[A-Z|a-z]/i)) {
      current++;
    }
    let currentWord = '';
    let currentWordReverse = '';
    //whie current is string is a letter...
    //...and to currentWord and currentWordReverse while incrementing current
    while(str[current] && str[current].match(/[A-Z|a-z]/i)) {
      currentWord += str[current].toLowerCase();
      currentWordReverse = str[current].toLowerCase() + currentWordReverse;
      current += 1;
    }
    //if current workd equal to previous word reverse, pop off previous word 
    if (stack.length && currentWord === stack[stack.length-1].reverseWord){
      stack.pop();
    }
    //elss push object with current word and its reverse on the stack
    else {
      stack.push({word: currentWord, reverseWord: currentWordReverse});
    }
  }
  //if stack is empty, return true, else return false
  return stack.length === 0 ? true : false;
}

  //   let newStr = str.replace(/[~`!@#$%^&*(){}\[\];:"'<,.>?\/\\|_+=-]/g, ' ').toLowerCase();
//   console.log(newStr)
//   const arr = Array.from(newStr);
//   //if (arr.includes(" ")) {
//     //console.log(arr)
//     let wordCheckLeft = '';
//     let wordCheckRight = '';
//     let wrongCount = 0;
//     for (let i = 0; i < arr.length / 2; i++) {
//       let left = arr[i];
//       let right = arr[arr.length - 1 - i];
//       if (left === right) {
//         wordCheckLeft.concat(left);
//         wordCheckRight.concat(right);
//       } else {
//         wrongCount += 1;
//         break;
//       }
//     }

//     console.log('right', wordCheckRight, 'left', wordCheckLeft, 'wrong', wrongCount)

// }
  //   // return true
  //   }
  // } else {
  //   return false;
  // }
 //console.log(wordCheck)




console.log(matchWord('__END_DNE-----'));  //-> true
console.log(matchWord('__ENDDNE__'));  //-> false       (not separated by a space)
// matchWord('IF()()fi[]');  //-> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  //-> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  //-> true
// matchWord('');  //-> true

module.exports = matchWord;
