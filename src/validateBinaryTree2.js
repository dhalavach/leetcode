function isValidBST(root) {
  if (root === null || root.length === 1) return 1;

  let stack = [];
  let prev = null;

  while (stack.length > 0 || root !== null) {
    while (root !== null) {
      stack.push(root);
      root = root.left;
    }

    root = stack.pop();
    if (prev !== null && root.val <= prev) return false;

    prev = root.val;
    root = root.right;
  }
  return true;
}
