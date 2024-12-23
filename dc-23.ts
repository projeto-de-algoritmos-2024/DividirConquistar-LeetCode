// LeetCode Divide and Conquer: #23 Merge k Sorted Lists

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  if (!l1) return l2;
  if (!l2) return l1;

  const dummy = new ListNode();
  let current = dummy;

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }

  current.next = l1 ? l1 : l2;
  return dummy.next;
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (lists.length === 0) return null;

  let mergedList = lists[0];

  for (let i = 1; i < lists.length; i++) {
    mergedList = mergeTwoLists(mergedList, lists[i]);
  }

  return mergedList;
}
