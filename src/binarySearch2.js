// classic implementation

var search = function (nums, target) {
  if (nums.length === 0) return -1;

  let left = 0;
  let right = nums.length - 1;
  let middle;

  while (left <= right) {
    middle = Math.floor(left + right) ;
    if (nums[middle] === target) return middle;
    if (nums[middle] > target) right = middle - 1;
    else left = middle + 1;
  }

  return -1;
};
