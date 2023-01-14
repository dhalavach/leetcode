/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function middleNode(head) {
  let slowPointer = head;
  let fastPointer = head;

  while (fastPointer.next !== null && fastPointer.next.next !== null) {
    fastPointer = fastPointer.next.next;
    slowPointer = slowPointer.next;
  }

  if (fastPointer.next === null) return slowPointer;
  return slowPointer.next;
}
