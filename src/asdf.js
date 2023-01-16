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
  let chain = [];
  chain.push(root);
  res.push([root.val]);

  while (chain.length > 0) {
    let temp = [];
    let curr = chain.shift();
    //res.push(temp)

    if (curr.left !== null) {
      temp.push(curr.left.val);
      chain.push(curr.left);
    }
    if (curr.right !== null) {
      temp.push(curr.right.val);
      chain.push(curr.right);
    }
    if (temp.length !== 0) {
      res.push(temp);
    }
  }

  return res;
}
