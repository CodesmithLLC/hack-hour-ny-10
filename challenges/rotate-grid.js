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
  let newGrid = [];
  for (let index = 0; index < n; index++) {
    newGrid.push([]);
    for (let index2 = n - 1; index2 >= 0; index2--) {
      newGrid[index].push(grid[index2][index]);
    }
  }
  return newGrid;
}

// console.log(
//   rotateGrid(
//     [[1, 2, 3, 4], [12, 13, 14, 5], [11, 16, 15, 6], [10, 9, 8, 7]],
//     4,
//   ),
// );

module.exports = rotateGrid;
