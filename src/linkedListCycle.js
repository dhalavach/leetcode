/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
var detectCycle = function (head) {
  let fast = head;
  let slow = head;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) return slow;
  }
  return -1;
};

var n3 = new ListNode(10, null);
var n2 = new ListNode(3, n1);
var n1 = new ListNode(1, n2);
var L1 = n1;

console.log(detectCycle(L1));
