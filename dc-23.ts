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
  // Se uma das listas estiver vazia, retorne a outra
  if (!l1) return l2;
  if (!l2) return l1;

  const dummyHead = new ListNode();
  let current = dummyHead;

  // Enquanto ambas as listas tiverem nós
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

  // Se restar algo de l1 ou l2, anexamos ao final
  current.next = l1 ? l1 : l2;

  return dummyHead.next;
}

/**
 * Função recursiva que divide as listas ao meio e faz merge recursivamente.
 */
function mergeListsRange(
  lists: Array<ListNode | null>,
  start: number,
  end: number
): ListNode | null {
  // Se não houver intervalos válidos, retorne null
  if (start > end) return null;
  // Se for só um elemento, retorne-o
  if (start === end) return lists[start];

  // Dividir ao meio
  const mid = Math.floor((start + end) / 2);
  const left = mergeListsRange(lists, start, mid);
  const right = mergeListsRange(lists, mid + 1, end);

  // Merge das duas metades
  return mergeTwoLists(left, right);
}

/**
 * Função principal que recebe o array de k listas.
 */
function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (lists.length === 0) return null;
  return mergeListsRange(lists, 0, lists.length - 1);
}
