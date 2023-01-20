/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const water = '0';
  const land = '1';
  const traversed = '2';
  let islands = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === land) {
        islands++;
        check(grid, i, j);
      }
    }
  }

  function check(grid, r, c) {
    while (grid[r][c] === land) {
      grid[r][c] = traversed;
      if (r >= 1) check(grid, r - 1, c);
      if (c >= 1) check(grid, r, c - 1);
      if (r + 1 < grid.length) check(grid, r + 1, c);
      if (c + 1 < grid[0].length) check(grid, r, c + 1);
    }
  }
  return islands;
};

const testGrid1 = [
  ['1', '1', '1', '1', '0'],
  ['1', '1', '0', '1', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '0', '0', '0'],
];

const testGrid2 = [
  ['1', '1', '0', '0', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '1', '0', '0'],
  ['0', '0', '0', '1', '1'],
];
const testGrid3 = [
  ['0', '0', '0'],
  ['0', '0', '0'],
  ['0', '0', '0'],
];

console.log(numIslands(testGrid1)); // expected 1
console.log(numIslands(testGrid2)); //expected 3
console.log(numIslands(testGrid3)); //expected 0
