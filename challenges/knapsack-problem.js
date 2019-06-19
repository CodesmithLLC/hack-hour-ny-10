/*
  You have a knapsack with a weight limit.
  You are presented with an array of objects, each with its own weight and value.
  Find the maximum value you can fit into your knapsack, given the weight constraint.

  e.g.
  items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];
  solveKnapsack(items, 3); // returns 7 (from items[0] and items[1])
  solveKnapsack(items, 5); // returns 9 (from items[1] and items[2])
*/

function solveKnapsack(items, weightAvailable) {
  // create an array to hold max possible value at each weight from 0 to weightAvailable
  const knapsack = new Array(weightAvailable + 1).fill(0);

  for (let i = 0; i < weightAvailable; i += 1) {
    // store the current max value for the current weight
    let maxPossibleValue = 0;
    const currentWeight = weightAvailable[i];

    for (let j = 0; j < items.length; j += 1) {
      const currentItem = items[j];
      // if the item weighs nothing and has positive value we can fill the knapsack
      // with an infinite number of items
      if (currentItem.weight === 0 && currentItem.value > 0) return Infinity;

      // if we can fit the current item into the knapsack
      if (currentItem.weight <= currentWeight) {
        // if we decide to take the item we need to subtract the items weight from the
        // current weight. we find the max possible value at that capacity at the index
        // corresponding to the difference between the current capacity and the weight
        // of the current item
        const maxValueWithCurrentItem = currentItem.value + knapsack[currentWeight - currentItem.weight];
        // update the max possible value if taking the current item
        // is greater than the max possible value so far
        maxPossibleValue = Math.max(maxValueWithCurrentItem, maxPossibleValue);
      }
    }

    // update knapsack with the max possible value at each capacity
    knapsack[currentWeight] = maxPossibleValue;
  }

  return knapsack[weightAvailable];
}

module.exports = solveKnapsack;
