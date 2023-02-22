/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let maxVolume = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    let volume = Math.min(height[left], height[right]) * (right - left);
    if (volume > maxVolume) maxVolume = volume;

    if (height[left] <= height[right]) left++;
    else right--;
  }

  return maxVolume;
};
