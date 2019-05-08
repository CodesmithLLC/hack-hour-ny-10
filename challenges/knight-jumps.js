// Have the function knightjumps(str) read str which will be a
// string consisting of the location of a knight on a standard 8x8 chess board with no other pieces on the board.

// The structure of str will be the following string: "(x y)" which represents the position of the knight with x and y ranging
// from 1 to 8.

// Your function should determine the number of spaces the knight can move to from a given location.
// For example: if str is "(4 5)" then your program should output 8 because the knight can move to 8 different spaces
// from position x = 4 and y = 5.
//  example input:
// var str = "(4 5)"

function knightjumps(str, func = (x, y) =>  x < 1 || x > 8 || y < 1 || y > 8) {
    const x = Number.parseInt(str[1]);
    const y = Number.parseInt(str[3]);
    if(func(x, y)) return undefined;
    const loc = getLoc(x, y);
    return loc.reduce((acc, item) => {
        if(!func(item[0], item[1])) acc++;
        return acc;
    }, 0);
}

function getLoc(x, y) {
    const arr = [];
    arr.push([x+1, y+2]);
    arr.push([x-1, y+2]);
    arr.push([x+1, y-2]);
    arr.push([x-1, y-2]);
    arr.push([x+2, y+1]);
    arr.push([x+2, y-1]);
    arr.push([x-2, y+1]);
    arr.push([x-2, y-1]);
    return arr;
}
//console.log(knightjumps('(1 5)'));

module.exports = knightjumps;
