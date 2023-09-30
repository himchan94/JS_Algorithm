// 바닥공사

function solution(n) {
  const d = Array(1001).fill(0);

  d[1] = 1;
  d[2] = 3;

  for (let i = 3; i <= n; i++) {
    d[i] = d[i - 1] + 2 * d[i - 2];
  }

  return d[n];
}

console.log(solution(3));
