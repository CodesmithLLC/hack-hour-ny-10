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
  const triangle = [[1]];
  if (numRows === 1) return triangle;
  for (let row = 2; row <= numRows; row += 1) {
    const newRow = [];
    const lastRow = triangle[triangle.length - 1];
    for (let index = 0; index < row; index += 1) {
      newRow.push((lastRow[index - 1] || 0) + (lastRow[index] || 0));
    }
    triangle.push(newRow);
  }
  return triangle;
}

module.exports = pascalTriangle;
