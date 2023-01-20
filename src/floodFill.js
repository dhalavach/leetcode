/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  const startColor = image[sr][sc];
  let m = sr;
  let n = sc; 

  if (startColor !== color) check(image, m, n, startColor, color);

  function check(image, m, n, startColor, color) {
    if (image[m][n] === startColor) {
      image[m][n] = color;
      if (m >= 1) check(image, m - 1, n, startColor, color);
      if (n >= 1) check(image, m, n - 1, startColor, color);
      if (m + 1 < image.length) check(image, m + 1, n, startColor, color);
      if (n + 1 < image[0].length) check(image, m, n + 1, startColor, color);
    }
  }

  return image;
};

const test = [
  [1, 1, 1],
  [1, 1, 0],
  [1, 0, 1],
];
// expected [[2,2,2],[2,2,0],[2,0,1]]

console.log(floodFill(test, 1, 1, 2));
