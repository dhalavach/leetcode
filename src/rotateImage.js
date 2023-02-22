/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let res = [];
  let i = 0;
  while (i < matrix[0].length) {
    let temp = [];
    for (let j = matrix.length - 1; j >= 0; j--) {
      temp.push(matrix[j][i]);
    }
    res.push(temp);
    i++;
  }
  return res;
};

const test = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const test2 = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];

console.log(rotate(test2));
