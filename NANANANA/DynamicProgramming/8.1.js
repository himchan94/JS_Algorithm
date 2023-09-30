// 1로 만들기

/*
  정수 X가 주어질 때 정수 X에 사용할 수 있는 연산은 다음과 같이 4가지 이다.
  X가 5로 나누어떨어지면 5로 나눈다.
  X가 3으로 나누어떨어지면 3으로 나눈다.
  X가 2로 나누어떨어지면 2로 나눈다.
  X에서 1을 뺀다.

  정수 X가 주어졌을 때 4개의 연산을 사용해서 1을 만드는 최소 횟수는?

*/

// bottom up
const bottomupDp = (x) => {
  const d = [...Array(x + 1).fill(0)];

  for (let i = 2; i <= x; i++) {
    d[i] = d[i - 1] + 1;
    if (i % 2 === 0) d[i] = Math.min(d[i / 2], d[i - 1]) + 1;
    if (i % 3 === 0) d[i] = Math.min(d[i / 3], d[i - 1]) + 1;
    if (i % 5 === 0) d[i] = Math.min(d[i / 5], d[i - 1]) + 1;
  }

  return d[x];
};

const d = [...Array(10 + 1).fill(0)];
const topdownDp = (x) => {
  if (x === 1 || x === 2 || x === 3 || x === 5) return 1;
  if (d[x] !== 0) return d[x];

  if (x % 2 === 0) d[x] = Math.min(d[x / 2], d[x - 1]) + 1;
  if (x % 3 === 0) d[x] = Math.min(d[x / 3], d[x - 1]) + 1;
  if (x % 5 === 0) d[x] = Math.min(d[x / 5], d[x - 1]) + 1;

  return (d[x] = topdownDp(x - 1) + 1);
};

console.log(topdownDp(10));
