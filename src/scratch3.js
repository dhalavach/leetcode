function memo(fn) {
  const cache = {};
  return function func(...args) {
    const key = JSON.stringify(...args);
    if (cache[key]) return cache[key];
    const y = fn(...args);
    cache[key] = y;
    return y;
  };
}

function memo2(fn) {
  const cache = {};

  return (...args) => {
    let x = args[0];
    if (x in cache) {
      return cache[x];
    } else {
      const y = fn(x);
      cache[x] = y;
      return y;
    }
  };
}
