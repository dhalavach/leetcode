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
 * @return {number[][]}
 */
function levelOrder(root) {
  if (root === null) return [];
  let res = [];
  let currentLevel = [root];

  while (currentLevel.length > 0) {
    let temp = [];
    let length = currentLevel.length;
    for (let i = 0; i < length; i++) {
      let curr = currentLevel.shift();
      temp.push(curr.val);
      if (curr.left) currentLevel.push(curr.left);
      if (curr.right) currentLevel.push(curr.right);
    }
    res.push(temp);
  }
  return res;
}
