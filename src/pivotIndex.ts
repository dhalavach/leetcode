function pivotIndex(nums: number[]): number {

  const sum = nums.reduce((prev, curr) => prev + curr);
  let rightSum = sum;
  let leftSum = 0;
  let i = 0;

  while (leftSum !== rightSum - nums[i] && i <= nums.length - 1) {
    leftSum += nums[i];
    rightSum -= nums[i];
    i++;
  }
  if (rightSum - nums[i] === leftSum) return i;
  return -1;
}

module.exports = pivotIndex;