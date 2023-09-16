// 1이 될 때까지

function solution(n, k) {
  let result = 0;
  let target;

  while (true) {
    target = Math.floor(n / k) * k;
    result += n - target;
    n = target;

    if (n < k) break;
    result += 1;
    n = Math.floor(n / k);
  }

  result += n - 1;
  return result;
}

console.log(solution(29, 3));
