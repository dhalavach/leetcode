function Node(data, next) {
  this.data = data;
  this.next = next;
}

function reverseList(head) {
  let current = head;
  let previous = null;
  let next = null;

  while (current != null) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }
  head = previous;
  return head;
}

let head = new Node(85);
head.next = new Node(15);
head.next.next = new Node(4);
head.next.next.next = new Node(20);

console.log(head);
let rev = reverseList(head);
console.log(rev);
