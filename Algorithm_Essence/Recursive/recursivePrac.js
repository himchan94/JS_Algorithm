// Recursive practice

function power(a, b) {
  if (!b) return 1;
  if (b === 1) return a;
  return a * power(a, b - 1);
}

function factorial(num) {
  if (num === 1 || !num) return 1;

  return num * factorial(num - 1);
}

function productOfArray(arr) {
  if (!arr.length) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}

function recursiveRange(num) {
  if (!num) return 0;

  return num + recursiveRange(num - 1);
}
