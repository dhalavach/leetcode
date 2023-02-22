/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  let res = stones.sort((a, b) => a - b);
  while (res.length > 1) {
    let n = res.pop();
    let m = res.pop();
    if (n !== m) res.push(n - m);
    res = res.sort((a, b) => a - b);
  }
  return res;
};
