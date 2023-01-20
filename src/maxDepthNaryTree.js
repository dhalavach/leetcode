/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (root === null) return 0;
  if (root.children === null) return 1;
  let max = 0;

  for (let child of root.children) {
    max = Math.max(max, maxDepth(child));
  }

  return max + 1;
};
