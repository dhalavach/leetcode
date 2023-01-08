const romanToInt = require('../src/romanToArabic2.js');

test('the function has been defined', () => {
  expect(romanToInt).toBeDefined();
});

test('the function returns a number when called with Roman I', () => {
  expect(typeof romanToInt('I') === 'number');
});

test('Roman I equals 1', () => {
  expect(romanToInt('I')).toBe(1);
});

test('Roman III equals 3', () => {
  expect(romanToInt('III')).toBe(3);
});

test('Roman IV equals 4', () => {
  expect(romanToInt('IV')).toBe(4);
});

test('Roman V equals 5', () => {
  expect(romanToInt('V')).toBe(5);
});

test('Roman VI equals 6', () => {
  expect(romanToInt('VI')).toBe(6);
});

test('Roman IX equals 9', () => {
  expect(romanToInt('IX')).toBe(9);
});

test('Roman X equals 10', () => {
  expect(romanToInt('X')).toBe(10);
});

test('Roman XI equals 11', () => {
  expect(romanToInt('XI')).toBe(11);
});

test('Roman XIV equals 14', () => {
  expect(romanToInt('XIV')).toBe(14);
});

test('Roman XX equals 20', () => {
  expect(romanToInt('XX')).toBe(20);
});

test('Roman XL equals 40', () => {
  expect(romanToInt('XL')).toBe(40);
});

test('Roman L equals 50', () => {
  expect(romanToInt('L')).toBe(50);
});

test('Roman XC equals 90', () => {
  expect(romanToInt('LIV')).toBe(54);
});

test('Roman C equals 100', () => {
  expect(romanToInt('C')).toBe(100);
});

test('Roman D equals 500', () => {
  expect(romanToInt('D')).toBe(500);
});

test('Roman M equals 1000', () => {
  expect(romanToInt('M')).toBe(1000);
});

test('Roman CD equals 400', () => {
  expect(romanToInt('CD')).toBe(400);
});

test('Roman CM equals 900', () => {
  expect(romanToInt('CM')).toBe(900);
});

test('Roman MCMXCIV equals 1994', () => {
  expect(romanToInt('MCMXCIV')).toBe(1994);
});

test('Roman MMM equals 3000', () => {
  expect(romanToInt('MMM')).toBe(3000);
});
