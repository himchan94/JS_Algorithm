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

function solution(n, m, k, arr) {
  const sortedArr = arr.sort();
  const max = sortedArr[n - 1];
  const secondMax = sortedArr[n - 2];

  const timesOfMax = parseInt(m / (k + 1)) * k + (m % (k + 1));
  const timesOfSecondMax = m - timesOfMax;

  return max * timesOfMax + secondMax * timesOfSecondMax;
}

console.log(solution(5, 8, 3, [2, 3, 4, 5, 6]));
