const fs = require("fs");

const input = fs.readFileSync("input.txt").toString().split("\n");

let START_NUMBER = input[0];
let calNum = START_NUMBER;
let cycle = 0;

if (calNum.length === 1) {
  calNum = "0" + calNum;
  START_NUMBER = calNum;
}

while (true) {
  const [a, b] = calNum.split("");
  const A = +a;
  const B = +b;

  const sum = String(A + B);
  let backNum;
  if (sum.length === 1) {
    backNum = sum;
  } else {
    backNum = sum[1];
  }

  calNum = b + backNum;
  cycle += 1;

  if (calNum === START_NUMBER) break;
}

console.log(cycle);
