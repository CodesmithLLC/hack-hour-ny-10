// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac",
// i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that
// takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or
// punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ]
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
  let splitString = str.split(/[^A-Za-z0-9]+/g);
  splitString = splitString.filter(char => /\S/.test(char));
  //   console.log(splitString);
  const firstHalf = splitString.slice(0, splitString.length / 2);
  //   console.log(firstHalf);
  const secondHalf = splitString.slice(splitString.length / 2);
  //   console.log(secondHalf);
  const tempArray = [];

  for (let i = 0; i < secondHalf.length; i += 1) {
    tempArray.push(
      secondHalf[i]
        .split('')
        .reverse()
        .join(''),
    );
  }
  //   const reverse = secondHalf.join('').split('');
  //   .reverse();
  // .join('');
  console.log(tempArray);

  //   for (let i = 0; i < splitString.length; i += 1) {}

  return splitString;
}
matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');
module.exports = matchWord;
