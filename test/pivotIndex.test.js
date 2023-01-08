const pivotIndex = require('../src/pivotIndex.ts');

test('the function has been defined', () => {
  expect(pivotIndex).toBeDefined();
});

// test('the functions throws an error when called with invalid input', () => {
//   expect(() => pivotIndex('asdf')).toThrow('Invalid input!');
// });

test('the function returns  a number', () => {
  expect(typeof pivotIndex([1, 7, 3, 6, 5, 6]) === 'number');
});

test('the function return pivot index', () => {
  expect(pivotIndex([1, 7, 3, 6, 5, 6])).toBe(3);
});

test('the function returns -1 if  pivot index does not exist', () => {
  expect(pivotIndex([1, 2, 3])).toBe(-1);
});

test('the function returns correct result if the pivot index is on the left', () => {
  expect(pivotIndex([2, 1, -1])).toBe(0);
});

test('the function returns correct result if sequence of zeroes is present', () => {
  expect(pivotIndex([-1, -1, 0, 0, -1, -1])).toBe(2);
});

test('the function returns correct index', () => {
  expect(pivotIndex([-1, -1, -1, -1, -1, 0])).toBe(2);
});
