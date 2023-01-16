function hasCycle(head) {
  let nodes = new Set();
  let pointer = head;

  while (pointer !== null) {
    if (nodes.has(pointer)) return true;

    nodes.add(pointer);
    pointer = pointer.next;
  }

  return false;
}
