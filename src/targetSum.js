function canSum(sum, numbers, cache = {}) {
  if (sum in cache) return cache[sum];
  if (sum === 0) return true;
  if (sum < 0) return false;

  for (num of numbers) {
    let remainder = sum - num;
    if (canSum(remainder, numbers, cache) === true) {
      cache[sum] = true;
      return true;
    }
  }
  cache[sum] = false;
  return false;
}

console.log(canSum(7, [3, 4]));
console.log(canSum(7, [3, 3]));
console.log(canSum(8, [7, 14]));
console.log(canSum(8, [2, 3, 5]));
console.log(canSum(300, [7, 14]));
