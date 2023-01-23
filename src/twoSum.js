// o(n2) solution
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        res.push(i, j);
      }
    }
  }
  return res;
};

//even worse
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum2 = function (nums, target) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    let match = nums.indexOf(diff);
    if (match !== -1 && match !== i) {
      result.push(i);
      result.push(match);
      break;
    }
  }
  return result;
};

let test = [4, 2, 1, 7, 11, 15];

// let diffs = [ 5, 7, 8, 2, -2, -6 ]
let target = 9;
let diffs = test.map((n) => target - n);
console.log(diffs);

// hash map to the rescue

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum3 = function (nums, target) {
  let result = [];
  let hash = {};
  nums.map((n, i) => {
    let d = target - n;
    hash[d] = i;
  });

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in hash && hash[nums[i]] !== i) {
      result.push(i);
      result.push(hash[nums[i]]);
      break;
    }
  }
  return result;
};

//best version - single pass hash

var twoSum4 = function (nums, target) {
  let result = [];
  let hash = new Map();

  for (let i = 0; i < nums.length; i++) {
    let d = target - nums[i];
    if (hash.has(d)) {
      result.push(i, hash.get(d));
    }
    hash.set(nums[i], i);
  }

  return result;
};
