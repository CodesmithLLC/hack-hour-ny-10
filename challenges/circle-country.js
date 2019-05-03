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
const inCircle = (xPos, yPos, cX, cY, cR) => {
  // get horizontal and vertical offsets from center
  let horiz = Math.abs(xPos - cX);
  let vert = Math.abs(yPos - cY);
  // compute distance from center (pythag)
  let distFromCenter = Math.sqrt(Math.pow(horiz,2) + Math.pow(vert, 2))
  // if greater than radius, outside the circle (and if on circumfrence, also outside)
  if (distFromCenter >= cR) return false
  return true

}

function circleCountry(x, y, r, start_x, start_y, end_x, end_y) {
  let circleCount = 0;
  for (let i = 0; i < x.length; i += 1) {
    let startIn = inCircle(start_x, start_y, x[i], y[i], r[i])
    let endIn = inCircle(end_x, end_y, x[i], y[i], r[i])
    // if you start in a circle and the end is not in that circle, must exit the circle
    // therefore you cross 1 border += 1
    if (startIn && !endIn) {
      circleCount += 1;
    } else if (!startIn && endIn) { // if you end in a circle that you didn't start in, you need to cross into it
      circleCount += 1;
    }
  }
  return circleCount
}



// let start_x = 1;
// let start_y = 1;

// let end_x = 30;
// let end_y = 25;

// let x = [0,3,30,0]
// let y = [0,3,28,0]
// let r = [10,3,10,0.5]

// console.log(circleCountry(x, y, r, start_x, start_y, end_x, end_y))



module.exports = circleCountry;

