class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function traverse(root) {
  if (root === null) return [];
  const stack = [];
  stack.push(root);
  let res = [];

  while (stack.length > 0) {
    let current = stack.pop();
    res.push(current.value);
    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }

  return res;
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

console.log(traverse(a));
