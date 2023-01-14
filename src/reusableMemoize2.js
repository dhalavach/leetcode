function memo(fn) {
const cache = new Map()
return function memoized(...args) {
  if (cache.has(args[0])) {
    return cache.get(args[0])
  } else {
    let y = fn(args[0])
    cache.set(args[0], y)
    return y
  }
}