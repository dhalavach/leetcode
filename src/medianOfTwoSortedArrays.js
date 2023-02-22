/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

//brute force approach
// var findMedianSortedArrays = function(nums1, nums2) {
//   let mergedArr = [...nums1, ...nums2];
//   const median =  (mergedArr.reduce((a, b) => a + b, 0)) / mergedArr.length;
//   return median;
// };

function findMedianSortedArrays(nums1, nums2) {
  if (nums1.length > nums2.length) {
    return findMedianSortedArrays(nums2, nums1);
  }

  const m = nums1.length;
  const n = nums2.length;

  let start = 0;
  let end = m;

  while (start <= end) {
    let median1 = Math.floor((start + end) / 2);
    let median2 = Math.floor((m + n + 1) / 2) - median1;

    let maxLeft1 = median1 === 0 ? Number.MIN_SAFE_INTEGER : nums1[median1 - 1];
    let minRight1 = median1 === m ? Number.MAX_SAFE_INTEGER : nums1[median1];

    let maxLeft2 = median2 === 0 ? Number.MIN_SAFE_INTEGER : nums2[median2 - 1];
    let minRight2 = median2 === n ? Number.MAX_SAFE_INTEGER : nums2[median2];

    if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
      if ((m + n) % 2 == 0) {
        return (
          (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2.0
        );
      } else {
        return Math.max(maxLeft1, maxLeft2);
      }
    } else if (maxLeft1 > minRight2) {
      end = median1 - 1;
    } else {
      start = median1 + 1;
    }
  }
}
