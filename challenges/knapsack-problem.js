/*
  !You have a knapsack with a weight limit.
  !You are presented with an array of objects, each with its own weight and value.
  !Find the maximum value you can fit into your knapsack, given the weight constraint.
  !e.g.
  !items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];
  !solveKnapsack(items, 3); // returns 7 (from items[0] and items[1])
  !solveKnapsack(items, 5); // returns 9 (from items[1] and items[2])
*/
const items1 = [
  { weight: 1, value: 3 },
  { weight: 2, value: 4 },
  { weight: 3, value: 5 },
];

const solveKnapsack = (items, maxWeight) => {
  if (!items || !maxWeight) return 0;
  // ! Create matrix to store intermediate values in for each potential weight
  // ! up to max weight
  const matrix = new Array(maxWeight + 1).fill(0);
  // ! Loop through the items, calculating max sum for each (vs prev row)
  for (let i = 0; i < items.length; i += 1) {
    console.log(matrix);
    const oldRow = matrix.slice();
    for (let cW = items[i].weight; cW <= maxWeight; cW += 1) {
      matrix[cW] = Math.max(
        matrix[cW],
        items[i].value + oldRow[cW - items[i].weight],
      );
    }
    console.log(matrix);
  }
  return matrix[matrix.length - 1];
};

solveKnapsack(items1, 3);

module.exports = solveKnapsack;
