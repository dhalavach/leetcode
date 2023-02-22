function convert(s, numRows) {
  if (numRows === 1) return s;
  const L = s.length;

  let parts = Math.ceil(L / (2 * numRows - 2));
  let numCols = parts * (numRows - 1)

  let matrix = new Array(numRows).fill(0).map(() => new Array(numCols).fill(' '));

  let currRow = 0; 
  let currCol = 0;
  let currStringIndex = 0;

  while (currStringIndex < n) {
    while (currRow < numRows && currStringIndex < n) {
      matrix[currRow][currCol] = s[currStringIndex];
      currRow++;
      currStringIndex++;
    }
    currRow -= 2;
    currCol++;

    while (currRow > 0 && currCol < numCols && currStringIndex < n) {
      matrix[currRow][currCol] = s[currStringIndex];
      currRow--;
      currCol++;
      currStringIndex++;
    }

  }
  let answer = matrix.map(row => row.join('')).join('');
  return answer.replace(/' '/g, '');

}