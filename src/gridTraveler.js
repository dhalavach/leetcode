const travelGrid = (m, n, cache = {}) => {
  const key = `${m}*${n}`;

  if (key in cache) return cache[key];
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  cache[key] = travelGrid(m - 1, n, cache) + travelGrid(m, n - 1, cache);
  return cache[key];
};

console.log(travelGrid(2, 3));
console.log(travelGrid(445, 515));
