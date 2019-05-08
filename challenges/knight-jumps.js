// Have the function knightjumps(str) read str which will be a
// string consisting of the location of a knight on a standard 8x8 chess board with no other pieces on the board.

// The structure of str will be the following string: "(x y)" which represents the position of the knight with x and y ranging
// from 1 to 8.

// Your function should determine the number of spaces the knight can move to from a given location.
// For example: if str is "(4 5)" then your program should output 8 because the knight can move to 8 different spaces
// from position x = 4 and y = 5.
//  example input:
// var str = "(4 5)"

const MOVES = [
  [2, 1],
  [2, -1],
  [-2, 1],
  [-2, -1],
  [1, 2],
  [-1, 2],
  [1, -2],
  [-1, -2]
];

function knightjumps(str) {
  let x = parseInt(str[1]);
  let y = parseInt(str[3]);
  if (!inBounds(x, y)) return undefined
  console.log(y)
  let total = 0;
  for (let i = 0; i < MOVES.length; i+= 1) {
    total += (inBounds(x + MOVES[i][0], y + MOVES[i][1])) ? 1 : 0
  }
  return total;
}

const inBounds = (x, y) => {
  console.log(x, y)
  if (x < 1 || x > 8 || y < 1 || y > 8) return false;
  return true;
};


module.exports = knightjumps;
