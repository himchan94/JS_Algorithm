// none memo fibo
function badFibo(n) {
  if (n <= 2) return 1;
  return badFibo(n - 1) + badFibo(n - 2);
}

// memoization
function fib(n, memo = []) {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  var res = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = res;
  return res;
}

// using tabulation
function bottomUpFib(n) {
  if (n <= 2) return 1;
  var fibNums = [0, 1, 1];
  for (var i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }

  return fibNums[n];
}

console.log(fib(100));
