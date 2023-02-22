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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
  if (root === null) return new TreeNode(val, null, null);

  let curr = root;
  while (true) {
    if (val < curr.val) {
      if (curr.left) curr = curr.left;
      else {
        curr.left = new TreeNode(val, null, null);
        break;
      }
    } else {
      if (curr.right) curr = curr.right;
      else {
        curr.right = new TreeNode(val, null, null);
        break;
      }
    }
  }
  return root;
};
