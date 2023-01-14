function memo(fn) {
  const cache = {};
  return function func(value) {
    let key = typeof value === 'object' ? JSON.stringify(value) : value;
    if (key in cache) return cache[key];
    return (cache[key] = fn(value));
  };
}
