// ex1 countDown
function countDown() {
  if (num <= 0) {
    console.log("All Done!");
    return;
  }

  console.log(num);
  num--;
  countDown(num);
}

// ex2 sumRange
function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

// ex3 factorial
function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}
