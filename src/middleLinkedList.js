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
  let curr = head;
  let temp = head;
  let counter = 0;

  while (curr !== null) {
    curr = curr.next;
    counter++;
  }

  let middleNodeIndex = Math.floor(counter / 2);
  let i = 0;

  while (i < middleNodeIndex) {
    temp = temp.next;
    i++;
  }

  return temp;
}
