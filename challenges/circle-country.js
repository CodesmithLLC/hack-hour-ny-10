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
  // if the start and end happen to not be within circles (or they are within the same circle)
  // then the answer is 0 (since Tyus will be able to sneak between any circle gaps)
  // so, just figure out which how many circles Tyus and the end are in and subtract off the circles they share
  const circles = [];
  for (let i = 0; i < r.length; i++) {
    circles.push({ x: x[i], y: y[i], r: r[i], count: 0 });
  }

  for (let circle of circles) {
    if (contains(circle, { pointX: start_x, pointY: start_y })) {
      circle.count += 1;
    }
    if (contains(circle, { pointX: end_x, pointY: end_y })) {
      circle.count += 1;
    }
  }
  //testing 12
  return circles.reduce((acc, el) => {
    if (el.count === 1) {
      acc++;
    }
    return acc;
  }, 0);
}

function contains(circle, point) {
  const { x: circleX, y: circleY, r: radius } = circle;
  const { pointX, pointY } = point;
  // calculate the distance from the point to the circle's center
  // if that distance is less than the radius, then the point is in the circle
  const distance = Math.sqrt(Math.abs(circleX - pointX) ** 2 + Math.abs(circleY - pointY) ** 2); // pythagorean
  if (distance < radius) {
    return true;
  } else {
    return false;
  }
}

module.exports = circleCountry;
