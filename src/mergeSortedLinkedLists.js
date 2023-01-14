function ListNode(val, next) {
  this.val = val;
  this.next = next;
}

function mergeTwoLists(list1, list2) {
  let list3 = new ListNode(null, null);
  let previous = list3;

  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      previous.next = list1;
      list1 = list1.next;
    } else {
      previous.next = list2;
      list2 = list2.next;
    }
    previous = previous.next;
  }

  if (list1 === null) previous.next = list2;
  if (list2 === null) previous.next = list1;

  return list3.next;
}

var n3 = new ListNode(10, null);
var n2 = new ListNode(3, n3);
var n1 = new ListNode(1, n2);
var L1 = n1;

var n6 = new ListNode(9, null);
var n5 = new ListNode(6, n6);
var n4 = new ListNode(5, n5);
var L2 = n4;

let mergedList = mergeTwoLists(L1, L2);
console.log(mergedList);
