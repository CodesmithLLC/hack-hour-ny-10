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
  if (str.length <= 1) return true;
  const split = str.toLowerCase().split(/\W|\_/gm);

  const filtered = split.filter(el => el !== '');

  const map = filtered.reduce((acc, curr) => {
    if (!acc[curr]) {
      acc[curr] = curr
        .split('')
        .reverse()
        .join('');
    }
    return acc;
  }, {});

  console.log(map);

  const start = 0;
  const end = filtered.length - 1;
  const stack = [];
  const copyOfArray = filtered.slice();

  while (start < end) {}
}

// if (!stack.length) {
//   return true;
// } else {
//   return false;
// }

// let start = 0;
// let end = str.length - 1;

// while (start < end) {
//   if (str[start] === str[end]) {
//     start++;
//     end--;
//   } else if (str[start].match(/\W|\_/gm)) {
//     start++;
//   } else if (str[end].match(/\W|\_/gm)) {
//     end--;
//   } else {
//     return false;
//   }
// }
// return true;
// }

console.log(matchWord('__END_DNE-----')); // true
console.log(matchWord('__ENDDNE__')); // false
console.log(matchWord('IF()()fi[]')); // true
console.log(matchWord('for__if__rof__fi')); // false
console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw')); // true
console.log(matchWord('')); // true

module.exports = matchWord;
