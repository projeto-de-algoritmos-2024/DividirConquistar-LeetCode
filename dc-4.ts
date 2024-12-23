// Leetcode Divide and Conquer: #4 - Median of Two Sorted Arrays

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  // Passo 1: Garantir que nums1 seja o menor array
  if (nums1.length > nums2.length) {
    return findMedianSortedArrays(nums2, nums1);
  }

  const m = nums1.length;
  const n = nums2.length;

  let left = 0;
  let right = m;

  while (left <= right) {
    // Partição em nums1
    const i = Math.floor((left + right) / 2);
    // Partição em nums2
    const j = Math.floor((m + n + 1) / 2) - i;

    // left1 = maior valor da esquerda de nums1
    const left1 = i === 0 ? Number.NEGATIVE_INFINITY : nums1[i - 1];
    // right1 = menor valor da direita de nums1
    const right1 = i === m ? Number.POSITIVE_INFINITY : nums1[i];

    // left2 = maior valor da esquerda de nums2
    const left2 = j === 0 ? Number.NEGATIVE_INFINITY : nums2[j - 1];
    // right2 = menor valor da direita de nums2
    const right2 = j === n ? Number.POSITIVE_INFINITY : nums2[j];

    // Conferir se as partições formaram uma separação válida
    if (left1 <= right2 && left2 <= right1) {
      // Achamos a partição correta
      const totalLength = m + n;
      if (totalLength % 2 === 0) {
        // Par: média entre max das esquerdas e min das direitas
        return (Math.max(left1, left2) + Math.min(right1, right2)) / 2;
      } else {
        // Ímpar: o mediano é o max das esquerdas
        return Math.max(left1, left2);
      }
    } else if (left1 > right2) {
      // Precisamos mover a fronteira de i para esquerda
      right = i - 1;
    } else {
      // left2 > right1, então movemos a fronteira de i para direita
      left = i + 1;
    }
  }

  throw new Error("Erro inesperado");
}
