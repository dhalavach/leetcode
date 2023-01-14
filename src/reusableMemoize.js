function memo(func) {
  const cache = {};
  return function memoized(...args) {
    let key;
    let value = args[0];
    if (
      value == null ||
      typeof value === 'number' ||
      typeof value === 'string'
    ) {
      key = value;
    } else {
      key = JSON.stringify(...args);
    }
    if (key in cache) return cache[key];
    return (cache[key] = func(...args));
  };
}
