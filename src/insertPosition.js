/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  let mid = Math.floor((left + right) / 2);

  while (left <= right) {
    if (nums[mid] === target) return mid;
    if (nums[mid] < target) {
      left = mid + 1;
      mid = Math.floor((left + right) / 2);
    } else {
      right = mid - 1;
      mid = Math.floor((left + right) / 2);
    }
  }
  return nums[mid] === target? mid: mid + 1 ;
};

console.log(searchInsert([1, 2, 3, 44, 55, 99, 101], 99));
