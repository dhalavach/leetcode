function reverseList(head) {
  if (head === null || head.next === null) return head;

  let previous = null;
  let next = null;
  let current = head;

  while (current !== null) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;

  }

  return previous;
}

function reverseListRec(head, previous = null) {
  if (head === null) return previous;
  let previous = null;
  let next = head.next;
  head.next = previous;
  return reverseList(next, head);

}
