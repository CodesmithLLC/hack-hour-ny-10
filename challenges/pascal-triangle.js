/*
  Construct Pascal's Triangle up to n levels deep, starting from n = 1. Each row
  is represented as an array of numbers.

  https://en.wikipedia.org/wiki/Pascal%27s_triangle

  e.g.
  pascalTriangle(1):
  [[1]]

  pascalTriangle(2):
  [
    [1],
    [1, 1]
  ]

  pascalTriangle(3) :
  [
    [1],
    [1,1],
    [1,2,1]
  ]

  pascalTriangle(6) :
  [
    [1],
    [1,1],
    [1,2,1],
    [1,3,3,1],
    [1,4,6,4,1],
    [1,5,10,10,5,1]
  ]
*/

function pascalTriangle(numRows) {
  let triangle = [[1]];
  let i = 1;
  let j = 0;
  while( i < numRows) {
    let curRow = []
    j = 0
    while (j <= triangle[i -1].length) {
      if (j === 0 || j === triangle[i-1].length) {
        curRow.push(1)
      } else {
        let sum = triangle[i-1][j-1] + triangle[i-1][j];
        curRow.push(sum)
      }
      j += 1
    }
    triangle.push(curRow)
    i += 1
  }
  return triangle;
}



module.exports = pascalTriangle;
