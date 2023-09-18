// 왕실의 나이트

function solution(pos) {
  let answer = 0;
  const current = pos.split("");

  const xDirection = ["a", "b", "c", "d", "e", "f", "g", "h"];

  const currentXPosition =
    xDirection.findIndex((item) => item === current[0]) + 1;
  const currentYPosition = parseInt(current[1]);

  // x,y
  const directions = [
    { x: 2, y: -1 },
    { x: 2, y: 1 },
    { x: -2, y: -1 },
    { x: -2, y: 1 },
    { x: 1, y: 2 },
    { x: -1, y: 2 },
    { x: 1, y: -2 },
    { x: -1, y: -2 },
  ];

  for (let direction of directions) {
    if (
      currentXPosition + direction.x < 1 ||
      currentXPosition + direction.x > 8 ||
      currentYPosition + direction.y < 1 ||
      currentYPosition + direction.y > 8
    ) {
      continue;
    }

    answer += 1;
  }

  return answer;
}

console.log(solution("a1"));
