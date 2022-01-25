const fs = require("fs");

const input = fs.readFileSync("input.txt").toString().split("\n");

// const arr = input[1]
//   .split(" ")
//   .map((num) => Number(num))
//   .sort((a, b) => a - b);

// const MAX = arr[Number(input[0]) - 1];
// const MIN = arr[0];

// console.log(`${MIN} ${MAX}`);
const n = Number(input[0]);
const data = input[1].split(" ").map((x) => Number(x));

let minValue = 1000000; // 가능한 큰 값으로 초기화
let maxValue = -1000000; // 가능한 작은 값으로 초기화

for (let i = 0; i < n; i++) {
  let curValue = data[i];
  if (curValue < minValue) minValue = curValue;
  if (curValue > maxValue) maxValue = curValue;
}
console.log(`${minValue} ${maxValue}`);

let maxValue = data.reduce((a, b) => Math.max(a, b));
let minValue = data.reduce((a, b) => Math.min(a, b));
