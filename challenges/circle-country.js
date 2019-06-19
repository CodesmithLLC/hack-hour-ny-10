/**
 *  Circle Country is a country that contains several circular-shaped districts.
 *  Some districts may be situated inside other districts, but their borders do not intersect or touch.
 *  Tyus is a resident of Circle Country. When he travels between two locations, he always tries to cross the fewest number of district borders as possible.
 *
 *  You are given an array x, an array y, and an array r
 *
 *    - (x[i],y[i]) are the coordinates of the i-th circle's center and r[i] is its radius
 *
 *  In addition to the arrays, you are also given the numbers start_x, start_y, end_x, and end_y
 *
 *    - (start_x, start_y) are Tyus' starting coordinates and (end_x, end_y) are Tyus' destination coordinates
 *
 *
 *  Write an efficient algorithm for finding the minimum number of district borders Tyus must cross in order to get from
 *  (start_x, start_y) to (end_x, end_y)
 *
 *  Constraints:
 *    - x, y and r will each contain the same number of elements
 *    - (start_x, start_y) and (end_x, end_y) will never lie on a circle's border
 *    - no circle borders intersect/touch (but they can be nested)
 *
 */

function circleCountry(x, y, r, start_x, start_y, end_x, end_y) {
  const distance = (x1, y1, x2, y2) => {
    const distanceOfX = x1 - x2;
    const distanceOfY = y1 - y2;
    return Math.sqrt(distanceOfX ** 2 + distanceOfY ** 2);
  };

  let borderCrossings = 0;

  // Iterating through all circles, incrementing a count of # of times a border was crossed.
  for (let i = 0; i < r.length; i += 1) {
    // Distance from current circle center to Tyrus.
    const startDist = distance(x[i], y[i], start_x, start_y);
    // Distance from current circle center to the end.
    const endDist = distance(x[i], y[i], end_x, end_y);

    if (
      (startDist > r[i] && r[i] > endDist) ||
      (startDist < r[i] && r[i] < endDist)
    ) {
      borderCrossings += 1;
    }
  }

  return borderCrossings;
}

const x = [7, 6, 2, 14, 6];
const y = [9, 8, 14, 15, 8];
const r = [5, 2, 1, 2, 3];
const start_x = 10;
const start_y = 10;
const end_x = 6;
const end_y = 7;

circleCountry(x, y, r, start_x, start_y, end_x, end_y);

module.exports = circleCountry;
