/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */

function modemean(array) {
  const sum = array.reduce((acc, el) => (acc += el));
  const mean = sum / array.length;
  let mode;
  let maxAppearances = -Infinity;

  const tallyOfAppearances = array.reduce((acc, el) => {
    acc[el] ? (acc[el] += 1) : (acc[el] = 1);
    return acc;
  }, {});

  for (let key in tallyOfAppearances) {
    if (tallyOfAppearances[key] > maxAppearances) {
      mode = key;
      maxAppearances = tallyOfAppearances[key];
    }
  }
  return mode == mean;
}

module.exports = modemean;
