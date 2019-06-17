function permute(permutation) {
  const { length } = permutation;
  const result = [permutation.slice()];
  const c = new Array(length).fill(0);
  let i = 1; let k; let p;

  while (i < length) {
    console.log('c is', c, 'i is', i, 'permutation', permutation);
    if (c[i] < i) {
      k = i % 2 && c[i];
      p = permutation[i];
      permutation[i] = permutation[k];
      permutation[k] = p;
      ++c[i];
      i = 1;
      result.push(permutation.slice());
    } else {
      c[i] = 0;
      ++i;
    }
  }
  return result;
}

console.log(permute([1, 2, 3]));
