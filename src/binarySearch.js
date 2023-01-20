// clunky, unnecessary array splicing, fails some test cases
var search = function (nums, target) {
  if (nums.length === 0) return -1;
  let temp = nums;
  let middle = Math.floor(temp.length / 2);
  let pointer = middle;

  while (temp.length > 0) {
    if (temp[middle] === target) return pointer;
    middle = Math.floor(temp.length / 2);
    if (temp[middle] > target) {
      temp = temp.splice(0, middle);
      pointer = pointer - Math.ceil(temp.length / 2);
    }
    if (temp[middle] < target) {
      temp = temp.splice(middle, temp.length - 1);
      pointer = pointer + Math.ceil((temp.length - 1) / 2);
    }
  }
  return -1;
};

const testArr = [-1, 3, 5, 9, 12];
const testArr2 = [-1, 3, 5, 9];
const testArr3 = [2, 5];
console.log(binarySearch(testArr, 9));
console.log(binarySearch(testArr2, -1));
console.log(binarySearch(testArr3, 2));

// console.log(testArr3.splice(0, 1));

//console.log(testArr.splice(2, 4));
