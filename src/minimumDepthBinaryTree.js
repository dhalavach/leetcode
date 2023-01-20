/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  if (!root) return 0;

  let n = 0;
  let currentLevel = [root];

  while (currentLevel.length > 0) {
    let length = currentLevel.length;
    n += 1;
    for (let i = 0; i < length; i++) {
      let curr = currentLevel.shift();
      if (curr.left === null && curr.right === null) return n;
      if (curr.left) currentLevel.push(curr.left);
      if (curr.right) currentLevel.push(curr.right);
    }
  }
};
