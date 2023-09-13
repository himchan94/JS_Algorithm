// 거스름돈

function solution(money) {
  const coins = [500, 100, 50, 10];
  let count = 0;
  for (let coin of coins) {
    if (!money) break;

    count += parseInt(money / coin);
    money = money % coin;
  }

  return count;
}

console.log(solution(1260));
