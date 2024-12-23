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

/**
 * Mescla k listas encadeadas, mesclando-as em pares a cada iteração,
 * até sobrar apenas uma lista final.
 */
function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (lists.length === 0) return null;

  while (lists.length > 1) {
    const mergedLists: Array<ListNode | null> = [];

    // Mescla as listas em pares
    for (let i = 0; i < lists.length; i += 2) {
      const l1 = lists[i];
      const l2 = i + 1 < lists.length ? lists[i + 1] : null;
      const merged = mergeTwoLists(l1, l2);
      mergedLists.push(merged);
    }

    // Atualiza `lists` com as listas resultantes, reduzindo-as pela metade
    lists = mergedLists;
  }

  return lists[0];
}
