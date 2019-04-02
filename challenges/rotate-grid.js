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
    const len = n-1;
    let temp = grid[0][0];
    grid[0][0] = grid[len][0];
    grid[len][0] = grid[len][len];
    grid[len][len] = grid[0][len];
    grid[0][len] = temp;
    if(len%2 === 0) {
        temp = grid[0][len/2];
        grid[0][len/2] = grid[len/2][0];
        grid[len/2][0] = grid[len][len/2];
        grid[len][len/2] = grid[len/2][len];
        grid[len/2][len] = temp;
    }
    for(let i = 0; i < n; i++) {
        console.log(grid[i]);
    }
}
const grid = [[1, 2, 3],
              [4, 5, 6],
              [7, 8, 9]]
const grid2 = [[1, 2, 3, 4, 5],
               [6, 7, 8, 9, 10],
               [11,12,13,14,15],
               [16,17,18,19,20],
               [21,22,23,24,25]]
console.log(rotateGrid(grid2, 5));
module.exports = rotateGrid;
