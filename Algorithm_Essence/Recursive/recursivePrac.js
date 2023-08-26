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

function reverse(str) {
  // add whatever parameters you deem necessary - good luck!

  const splittedString = str.split("");
  const reversedStringArr = [];

  function helper(arr) {
    const length = arr.length;
    if (!length) return;

    reversedStringArr.push(arr[length - 1]);
    helper(arr.slice(0, length - 1));
  }

  helper(splittedString);
  return reversedStringArr.join("");
}

function fibo(num) {
  if (num === 1 || num === 2) return 1;

  return fibo(num - 1) + fibo(num - 2);
}

function isPalindrome(str) {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
  return false;
}
