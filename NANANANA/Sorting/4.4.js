// 두 배열의 원소교체

function solution(n, k, arr1, arr2) {
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => b - a);

  for (i = 0; i < k; i++) {
    // swap
    if (arr1[i] < arr2[i]) {
      arr1[i] = arr2[i];
    }
  }

  return arr1.reduce((acc, cur) => acc + cur, 0);
}

console.log(solution(5, 3, [1, 2, 5, 4, 3], [5, 5, 6, 6, 5]));
