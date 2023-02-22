/**
 * @param {number[]} stones
 * @return {number}
 */
function lastStoneWeight(stones) {
  let res = stones.sort((a, b) => a - b);
  while (res.length > 1) {
    let n = res.pop();
    console.log('n:  ', n);
    let m = res.pop();
    console.log('m:   ', m);
    if (n !== m) res.push(n - m);
    res = res.sort();
  }
  return res;
}

console.log(lastStoneWeight([8, 10, 4]));
