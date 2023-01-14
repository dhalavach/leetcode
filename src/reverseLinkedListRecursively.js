function Node(data, next) {
  this.data = data;
  this.next = next;
}

function reverseList(head) {
  if (head == null || head.next == null) return head;

  let rest = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return rest;
}

let head = new Node(85);
head.next = new Node(15);
head.next.next = new Node(4);
head.next.next.next = new Node(20);

console.log(head);
let rev = reverseList(head);
console.log(rev);
