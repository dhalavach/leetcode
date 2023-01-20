function factorial (x) {
  if (x === 0) return 1;
  return (x * factorial(x - 1))
}

console.log(factorial(5))

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  let i =  cost.length -1
  let minCost = 0;

  while( i > 0) {
      if ( cost[i] < cost[i - 1]) {
          minCost += cost[i]
          i-=1
      }
      if (cost[i-1] <= cost[i] ) {
      minCost += cost[i-1];
      i -= 2;
      }

  }
  return minCost;
};