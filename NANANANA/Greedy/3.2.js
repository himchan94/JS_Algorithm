// 큰 수의 법칙

// naive
function naiveSolution(n, m, k, arr) {
  let count = 0,
    sum = 0;

  const sortedArr = arr.sort();
  const max = sortedArr[n - 1];
  const secondMax = sortedArr[n - 2];

  while (true) {
    for (let i = 0; i < k; i++) {
      if (count === m) break;
      sum += max;
      count += 1;
    }

    sum += secondMax;
    count += 1;
    if (count === m) break;
  }

  return sum;
}

console.log(naiveSolution(5, 8, 3, [2, 3, 4, 5, 6]));
