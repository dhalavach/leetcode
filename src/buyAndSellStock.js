/**
 * @param {number[]} prices
 * @return {number}
 */

// brute force, O(n2) time complexity
var maxProfit1 = function (prices) {
  if (prices.length === 1) return 0;
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i; j < prices.length; j++) {
      let diff = prices[j] - prices[i];
      if (diff > profit) profit = diff;
    }
  }
  return profit;
};

// single iteration approach; O(n) time complexity
/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit2(numbers) {
  let min = numbers[0];
  let profit = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < min) min = numbers[i];
    const diff = numbers[i] - min;
    if (diff > profit) profit = diff;
  }

  return profit;
}