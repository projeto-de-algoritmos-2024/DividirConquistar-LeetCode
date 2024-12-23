function findMedianSortedArraysBroken(
  nums1: number[],
  nums2: number[]
): number {
  // Junta ambos os arrays (custo O(m + n))...
  const merged = nums1.concat(nums2);
  // ... mas ordena de maneira que o custo seja O((m+n) * log(m+n)) - o que fura o requisito O(log(m+n))
  merged.sort((a, b) => a - b);

  const len = merged.length;
  // Pega o valor do meio
  if (len === 0) return 0; // falha feia em caso de arrays vazios

  if (len % 2 === 1) {
    // Mediana para tamanho ímpar
    return merged[Math.floor(len / 2)];
  } else {
    // Mediana para tamanho par
    const mid = len / 2;
    return (merged[mid - 1] + merged[mid]) / 2;
  }
}
