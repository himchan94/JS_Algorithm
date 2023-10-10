// ATM

let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number); // 오름차순 정렬
arr.sort((a, b) => a - b);
let answer = 0;
let summary = 0;
for (let i = 0; i < n; i++) {
  summary += arr[i]; // i번째 사람이 기다린 총 시간
  answer += summary;
}
console.log(answer);
