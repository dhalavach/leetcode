/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

//brute force O(2 ** n + m) time complexity, O(n + m) space complexity
var uniquePaths0 = function (m, n) {
  if (m === 0 || n === 0) return 0;
  if (m === 1 && n === 1) return 1;
  // if (m === 1 || n === 1) return 1;

  return uniquePaths(m - 1, n) + uniquePaths(m, n - 1);
};

var uniquePaths = function (m, n) {
  let cache = {};

  function check(m, n) {
    if (m === 0 || n === 0) return 0;
    if (m === 1 && n === 1) return 1;

    let key = m + ',' + n;
    if (key in cache) {
      return cache[key];
    } else {
      cache[key] = check(m - 1, n) + check(m, n - 1);
      return cache[key];
    }
  }

  let res = check(m, n);
  return res;
};

var uniquePaths2 = function (m, n) {
  let cache = {};

  function check(m, n) {
    if (m === 0 || n === 0) return 0;
    if (m === 1 && n === 1) return 1;

    let key = m + ',' + n;
    // let keyEquivalent = n + ',' + m
    if (key in cache) {
      return cache[key];
    } else {
      let res = check(m - 1, n) + check(m, n - 1);
      cache[`${m},${n}`] = res;
      cache[`${m},${n}`] = res;
      return res;
    }
  }

  return check(m, n);
};

const uniquePaths3 = (m, n, cache = {}) => {
  if (m === 0 || n === 0) return 0;
  if (m === 1 && n === 1) return 1;

  let key = m + ',' + n;
  if (key in cache) return cache[key];
  cache[key] = uniquePaths(m - 1, n, cache) + uniquePaths(m, n - 1, cache);
  return cache[key];
};

// O(m * n) time complexity, O(n + m) space
const uniquePaths4 = (m, n, cache = {}) => {
  if (m === 0 || n === 0) return 0;
  if (m === 1 || n === 1) return 1;

  let key = m + ',' + n;
  if (key in cache) return cache[key];
  return (cache[key] =
    uniquePaths(m - 1, n, cache) + uniquePaths(m, n - 1, cache));
};

// version 5 with tabulation
var uniquePaths5 = function(m, n) {
  const grid =  Array(m + 1).fill().map(() => Array(n + 1).fill(0));
  grid[1][1] = 1;
  for(let i = 0; i <= m; i++) {
      for(let j = 0; j <= n; j++) {
          let curr = grid[i][j];
          if(j + 1 <= n ) grid[i][j+1] += curr;
          if (i + 1 <= m) grid[i+1][j] += curr;
      }
  }

  return grid[m][n]
};


