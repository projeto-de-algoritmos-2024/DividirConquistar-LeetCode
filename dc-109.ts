// LeetCode Divide and conquer - 109. Convert Sorted List to Binary Search Tree

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function sortedListToBST(head: ListNode | null): TreeNode | null {
  // 1. Convertemos a lista em um array
  const values: number[] = [];
  while (head !== null) {
    values.push(head.val);
    head = head.next;
  }

  // 2. Função recursiva para construir a BST
  function buildBST(left: number, right: number): TreeNode | null {
    if (left > right) return null;
    const mid = Math.floor((left + right) / 2);

    // Cria o nó usando o elemento do meio
    const root = new TreeNode(values[mid]);

    // Constrói a subárvore da esquerda e da direita
    root.left = buildBST(left, mid - 1);
    root.right = buildBST(mid + 1, right);

    return root;
  }

  // 3. Constroi a BST a partir do array de valores
  return buildBST(0, values.length - 1);
}
