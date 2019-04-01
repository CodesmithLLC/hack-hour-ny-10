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
  if (n <= 1) return grid;
  //do this by layers
  let layers = Math.ceil(n / 2);
  while (n > 1) {
    const tempRight = topToRight(grid, n);
    const tempBottom = rightToBottom(grid, n, tempRight);
    const tempLeft = bottomToLeft(grid, n, tempBottom);
    leftToTop(grid, n, tempLeft);
    n -= 2;
  }

  function topToRight(grid, layer) {
    const tempRight = [];
    for (let i = 0; i < layer; i++) {
      tempRight.push(grid[i][layer - 1]);
      grid[i][layer - 1] = grid[0][i];
    }
    console.log(tempRight, grid);
    return tempRight;
  }
  function rightToBottom(grid, layer, tempRight) {
    const tempBottom = [];
    for (let i = 0; i < layer; i++) {
      tempBottom.push(grid[layer - 1][i]);
      grid[layer - 1][i] = tempRight[layer - 1 - i];
    }
    tempBottom[layer - 1] = tempRight[layer - 1];
    console.log(tempBottom, grid);
    return tempBottom;
  }
  function bottomToLeft(grid, layer, tempBottom) {
    const tempLeft = [];
    for (let i = 0; i < layer; i++) {
      tempLeft.push(grid[layer - 1 - i][0]);
      grid[layer - 1 - i][0] = tempBottom[layer - 1 - i];
    }
    tempLeft[0] = tempBottom[0];
    console.log(tempLeft, grid);
    return tempLeft;
  }
  function leftToTop(grid, layer, tempLeft) {
    for (let i = 0; i < layer; i++) {
      grid[0][i] = tempLeft[i];
    }
  }
  return grid;
}

module.exports = rotateGrid;
