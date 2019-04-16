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

// n elements per row
// n rows per grid
function rotateGrid(grid, n) {
  const copyArray = $.extend(true, [], grid);
  // const copyArray = grid;

  let counter = n - 1;
  for (let i = 0; i < n; i++) {
    for (let k = 0; k < n; k++) {
      grid[k][counter] = copyArray[i][k];
    }
    counter--;
  }
  return grid;
}

const sampleGrid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.log(rotateGrid(sampleGrid, 3));

module.exports = rotateGrid;
