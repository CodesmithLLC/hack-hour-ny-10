/**
 *
 * You are given an array x and an array y that represent the coordinates of several OLD points
 *
 *   - x is the array of x-coordinates and y is the array of y-coordinates
 *   - (x[i], y[i]) correspond to coordinates of the i'th OLD point
 *
 * Write an algorithm to find the number of NEW points that can be placed
 * such that there are OLD points above, below, to the left, and to the right of the NEW point
 *
 *   - 'OLD directly above NEW' means the NEW x-coordinate = OLD x-coordinate & NEW y-coordinate < OLD y-coordinate
 *
 * Constraints and Notes:
 *
 * 	 - x and y will contain the same number of elements
 *   - if a new point is bounded by old points and lands on an old point, then count it
 *
 */

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.leftFlag = false;
    this.rightFlag = false;
    this.upFlag = false;
    this.downFlag = false;
  }
}

function newIntersections(x, y) {
  // get max x, min x, max y, min y. No need to check beyond those bounds
  // for each old point, mark all the points directly to the left (up to the bounds) with a 'left' flag
  // repeat this process for all points in the right, up, and down directions
  // now, scan thru all points within the bounds and increment a counter for each point that has all 4 flags
  const xMin = Math.min(...x);
  const xMax = Math.max(...x);
  const yMin = Math.min(...y);
  const yMax = Math.max(...y);

  // generate grid of points
  const grid = [];
  for (let i = yMin; i <= yMax; i++) {
    let row = [];
    for (let j = xMin; j <= xMax; j++) {
      row.push(new Point(i, j));
    }
    grid.push(row);
  }

  // set the flags of the points directly above, below, etc. each old point
  for (let i = 0; i < x.length; i++) {
    let currOldPoint = { x: x[i], y: y[i] };
    // mark all points directly to the left
    for (let coord = currOldPoint.x - 1; coord >= 0; coord--) {
      if (!grid[coord]) continue;
      if (!grid[currOldPoint.y]) continue;
      if (!grid[currOldPoint.x]) continue;
      grid[coord][currOldPoint.y].leftFlag = true;
    }
    // mark all points directly to the right
    for (let coord = currOldPoint.x + 1; coord < grid[0].length; coord++) {
      if (!grid[coord]) continue;
      if (!grid[currOldPoint.y]) continue;
      if (!grid[currOldPoint.x]) continue;
      grid[coord][currOldPoint.y].rightFlag = true;
    }
    // mark all points directly up
    for (let coord = currOldPoint.y - 1; coord >= 0; coord--) {
      if (!grid[coord]) continue;
      if (!grid[currOldPoint.y]) continue;
      if (!grid[currOldPoint.x]) continue;
      grid[currOldPoint.x][coord].upFlag = true;
    }
    // mark all points directly down
    for (let coord = currOldPoint.y + 1; coord < grid.length; coord++) {
      if (!grid[coord]) continue;
      if (!grid[currOldPoint.y]) continue;
      if (!grid[currOldPoint.x]) continue;
      grid[currOldPoint.x][coord].downFlag = true;
    }
  }

  let count = 0;
  for (let i = yMin; i <= yMax; i++) {
    for (let j = xMin; j <= xMax; j++) {
      const cand = grid[i][j];
      if (cand.leftFlag && cand.rightFlag && cand.upFlag && cand.downFlag) {
        count++;
      }
    }
  }

  return count;
}

module.exports = newIntersections;
