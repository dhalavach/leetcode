function cache1(func) {
  var calls = {};
  return function() {
    var key = JSON.stringify(arguments);
    if (!(key in calls)) {
      calls[key] = func.apply(null, arguments);
    }
    return calls[key];
  };
}

function cache2(fn) {
  const cached = {};
  function checkCached(key, func) {
    if (key in cached) return cached[key];
    return (cached[key] = func())
  }
  
  return function (args) {
    if (typeof args === 'object') {
      const value = Array.prototype.slice.call(arguments);
      return checkCached(JSON.stringify(value), () => fn.apply(this, value))
      
    } else {
     return checkCached(args, ()=> fn(args))
    }
    
  }
  
}

function cach3(func) {
  const cached = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (key in cached) return cached[key];
    cached[key] = func.apply(null, args)
    return cached[key]
  }
}