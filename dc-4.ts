function findMedianSortedArraysAlmost(
  nums1: number[],
  nums2: number[]
): number {
  // Tentar garantir que nums1 seja sempre o menor array:
  if (nums1.length > nums2.length) {
    return findMedianSortedArraysAlmost(nums2, nums1);
  }

  const m = nums1.length;
  const n = nums2.length;

  let left = 0;
  let right = m;

  while (left <= right) {
    // Faz a partição em nums1
    const i = Math.floor((left + right) / 2);
    // Tenta calcular a partição em nums2
    const j = Math.floor((m + n) / 2) - i;

    const left1 = nums1[i - 1];
    const right1 = nums1[i];
    const left2 = nums2[j - 1];
    const right2 = nums2[j];

    if (left1 <= right2 && left2 <= right1) {
      if ((m + n) % 2 === 0) {
        return (Math.max(left1, left2) + Math.min(right1, right2)) / 2;
      } else {
        return Math.max(left1, left2);
      }
    } else if (left1 > right2) {
      // Mover partição para a esquerda
      right = i - 1;
    } else {
      // Mover partição para a direita
      left = i + 1;
    }
  }

  return -1;
}
