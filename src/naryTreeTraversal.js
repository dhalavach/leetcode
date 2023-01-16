function preorderRecursive(root, res = []) {
  if (root === null) return res;
  res.push(root.val);

  for (let i = 0; i < root.children.length; i++) {
    preorderRecursive(root.children[i], res);
  }
  return res;
}

function preorderIterative(root) {
  if (!root) return [];

  let res = [];
  const stack = [root];

  while (stack.length > 0) {
    let curr = stack.pop();
    res.push(curr.val);

    if (curr.children) {
      for (let i = curr.children.length - 1; i >= 0; i--) {
        stack.push(curr.children[i]);
      }
    }
  }

  return res;
}
