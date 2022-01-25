const fs = require("fs");

const input = fs.readFileSync("input.txt").toString().split("\n");

let [hour, minute] = input[0].split(" ").map((num) => Number(num));

if (minute < 45) {
  hour -= 1;
  minute += 15;

  if (hour < 0) {
    hour = 23;
  }
} else {
  minute -= 45;
}

console.log(hour, minute);
