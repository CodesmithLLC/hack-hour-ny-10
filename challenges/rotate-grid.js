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
  const answer = []
  for (let i = 0; i < n; i++) {
    answer.push([])
  }
  for (let i = n-1; i >= 0; i--) {
    for (let j = 0; j < n; j++) {
      answer[j].push(grid[i][j])
    }
  }
  return answer
}

// all 3rd array is the first element 
// all 2nd the second perpendicular
// all 1st the third

module.exports = rotateGrid;
