/* You are given a NxN grid of elements represented by a 2D array. The ith nested array represents 
 * the ith row in the grid.
 * 
 * Write a function to rotate the grid 90 degrees clockwise. 
 *
 * For example:     sampleGrid before:  [   [1, 2, 3],
 *                                          [4, 5, 6],
 *                                          [7, 8, 9]  ]
 *                  
 *                  rotateGrid(sampleGrid, 3);
 *                  
 *                  sampleGrid after:   [   [7, 4, 1],
 *                                          [8, 5, 2],
 *                                          [9, 6, 3]  ]
 *
 * BONUS: Do this in place
 */

function rotateGrid(grid, n) {
  for (let i = 0; i < n/2; i += 1) {
    for (let j = i; j < n/2; j += 1) {
      const temp = grid[i][j];
      console.log(grid);
      console.log('----')
      console.log(temp);
      console.log(grid[j][n - i - 1]);
      console.log(grid[n - i - 1][j]);
      console.log(grid[j][i]);
      grid[i][j] = grid[j][i];
      grid[j][i] = grid[n-i-1][j];
      grid[n-i-1][j] = grid[j][n-i-1];
      grid[j][n - i - 1] = temp;
      // console.log(grid);
    }
  }
}

const sampleGrid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

rotateGrid(sampleGrid, 3);
module.exports = rotateGrid;
