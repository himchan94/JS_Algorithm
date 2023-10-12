// 음료수 얼려먹기

const graph = [
  [0, 0, 1, 1, 0],
  [0, 0, 0, 1, 1],
  [1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0],
];

const visited = [
  [0, 0, 1, 1, 0],
  [0, 0, 0, 1, 1],
  [1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0],
];

function solution(graph, visited) {
  const n = graph?.length;
  const m = graph[0]?.length;
  let result = 0;

  function dfs(x, y) {
    console.log(x, y);
    if (x <= -1 || x >= n || y <= -1 || y >= m) return false;

    if (graph[x][y] === 0) {
      graph[x][y] = 1;
      dfs(x - 1, y);
      dfs(x, y - 1);
      dfs(x + 1, y);
      dfs(x, y + 1);
      return true;
    }

    return false;
  }

  for (i = 0; i < n; i++) {
    for (j = 0; j < m; j++) {
      if (dfs(i, j)) result++;
    }
  }

  return result;
}

console.log(solution(graph, visited));
