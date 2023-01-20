// does not work - all nodes to the right should be larger than root, and vice versa
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
 * @return {boolean}
 */
var isValidBST = function (root) {
  if (root === null || root.length === 1) return true;
  let queue = [];
  queue.push(root);

  while (queue.length > 0) {
    let curr = queue.shift();
    if (curr.left !== null && curr.right !== null) {
      if (curr.left.val >= curr.right.val) return false;
    }
    if (curr.right !== null) {
      if (curr.val >= curr.right.val) return false;
    }

    if (curr.left !== null) {
      if (curr.val <= curr.left.val) return false;
    }
    if (curr.left !== null) queue.push(curr.left);
    if (curr.right !== null) queue.push(curr.right);
  }
  return true;
};
