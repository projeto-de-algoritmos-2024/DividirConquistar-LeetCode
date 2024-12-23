// LeetCode Divide and Conquer: #23 Merge k Sorted Lists

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  // Array para acumular todos os valores das listas
  const allValues: number[] = [];

  // Percorre cada lista e adiciona os valores no array
  for (const list of lists) {
    let current = list;
    while (current) {
      allValues.push(current.val);
      current = current.next;
    }
  }

  // Se não houver nenhum valor, retorna null
  if (allValues.length === 0) return null;

  // Ordena todos os valores
  allValues.sort((a, b) => a - b);

  // Reconstrói a lista encadeada a partir do array ordenado
  const dummyHead = new ListNode();
  let current = dummyHead;
  for (const val of allValues) {
    current.next = new ListNode(val);
    current = current.next;
  }

  // Retorna a cabeça da lista resultante
  return dummyHead.next;
}
