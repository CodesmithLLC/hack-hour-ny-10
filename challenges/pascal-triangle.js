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
  if(numRows < 1 || typeof numRows !== 'number') return [];
  const result = [[1]];
  if(numRows === 1) return result;
  if(numRows === 2) return [[1], [1,1]];
  for(let i = 0; i < numRows - 1; i++) {
    const last = result[result.length-1];
    const arr = [1];
    for(let j = 0; j < last.length-1; j++) {
      const sum = last[j] + last[j+1];
      arr.push(sum);
    } arr.push(1);
    result.push(arr);
  } return result;
}
//console.log(pascalTriangle(6))
module.exports = pascalTriangle;
