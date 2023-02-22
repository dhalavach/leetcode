function rotate(matrix) {
  const n = matrix.length;
  const depth = Math.floor(n / 2);
  for (let i = 0; i < depth; i++) {
    let len = n - 2 * i - 1;
    let opp = n - 1 - i;
    for (let j = 0; j < len; j++) {
      let temp = matrix[i][i + j];
      matrix[i][i + j] = matrix[opp - j][i];
      matrix[opp - j][i] = matrix[opp][opp - j];
      matrix[opp][opp - j] = matrix[i + j][opp];
      matrix[i + j][opp] = temp;
    }
  }
  return matrix;
}

const test1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const expected = [
  [7, 4, 1],
  [8, 5, 2],
  [9, 6, 3],
];

const test2 = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];

console.log(rotate(test1));
