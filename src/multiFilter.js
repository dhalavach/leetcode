function multiFilter(...funcs) {
  return (el) => funcs.every((f) => f(el));
}
