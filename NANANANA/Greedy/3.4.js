// 숫자 카드 게임

function solution(arr) {
  const minArray = [];

  for (let i = 0; i < arr.length; i++) {
    minArray.push(Math.min(...arr[i]));
  }

  return Math.max(...minArray);
}

console.log(
  solution([
    [3, 1, 2],
    [4, 1, 4],
    [2, 2, 2],
  ])
);
