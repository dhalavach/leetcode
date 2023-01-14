function once(fn) {
  let callCounter = 0;

  return function (...args) {
    if (callCounter === 0) {
      callCounter++;
      return fn(...args);
    } else {
      return undefined;
    }
  }
}
