const fs = require("fs");

const input = fs.readFileSync("input.txt").toString().split("\n");

const num = +input[0];

let sum = "";

for (let i = 1; i <= num; i++) {
  if (i === 1) {
    sum += i;
  } else {
    sum += "\n" + i;
  }
}

console.log(sum);
// const rl = require("readline").createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// const input = [];
// rl.on("line", function (line) {
//   input.push(line);
//   rl.close();
// }).on("close", function () {

//   process.exit();
// });
