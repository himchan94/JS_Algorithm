// 상하좌우

function solution(length, move) {
  const current = { x: 1, y: 1 };
  const xPos = [0, 0, -1, +1];
  const yPos = [-1, 1, 0, 0];
  const pos = ["L", "R", "U", "D"];

  for (let item of move) {
    const directionIdx = pos.findIndex((direction) => direction === item);
    if (
      current.x + xPos[directionIdx] < 1 ||
      current.x + xPos[directionIdx] > move ||
      current.y + yPos[directionIdx] < 1 ||
      current.y + yPos[directionIdx] > move
    ) {
      continue;
    } else {
      current.x += xPos[directionIdx];
      current.y += yPos[directionIdx];
    }
  }
  const { x, y } = current;
  return `${x} ${y}`;
}

console.log(solution(5, ["R", "R", "R", "U", "D", "D"]));
