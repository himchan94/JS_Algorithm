// let n = 1260;
// let count = 0;

// const coin_types = [500, 100, 50, 10];

// for (let i = 0; i < coin_types.length; i++) {
//   count += parseInt(n / coin_types[i]);

//   n %= coin_types[i];
// }

// console.log(count);

// 큰 수의 법칙
// M 번 더하여 가장 큰 수를 만듬, 단 배열의 특정한 인덱스 수가 연속해서 K번 더해짐
// 3 4 3 4 3 M=7 K=2

// N M K 5 8 3
// 2 4 5 4 6

// 6 + 6 + 6 + 5 + 6 + 6 + 6 + 5

// ************************************************************************************************************************ //

// 큰 수의 법칙

// function answer(n, m, k, array) {
//   array.sort((a, b) => b - a);
//   console.log(array);

//   let maxNum = array[0];
//   let second = array[1];

//   let result = 0;

//   while (true) {
//     for (let i = 0; i < k; i++) {
//       if (m === 0) {
//         break;
//       }
//       result += maxNum;
//       m -= 1;
//     }

//     if (m === 0) break;

//     result += second;
//     m -= 1;
//   }

//   return result;
// }

// console.log(answer(5, 8, 3, [2, 4, 5, 4, 6]));

// 하지만 배열이 길어지면 일일히 계산하기에 시간이 너무 오래 걸린다.
// 그래서 반복되는 수열을 찾아야한다.

// 가장 큰 수가 더해지는 횟수 parseInt(m / (K+1)) * k + m % (k + 1)

// function answer(n, m, k, array) {
//   array.sort((a, b) => b - a);

//   let maxNum = array[0];
//   let second = array[1];

//   let result = 0;

//   let maxNum_count = parseInt(m / (k + 1)) * k + (m % (k + 1));

//   result += maxNum_count * maxNum;
//   result += (m - maxNum_count) * second;

//   return result;
// }

// console.log(answer(5, 8, 3, [2, 4, 5, 4, 6]));

// ************************************************************************************************************************ //

// 숫자 카드 게임

// 숫자가 쓰인 카드들이 N x M 형태로 놓여있다. N은 행의 개수, M은 열의 개수

// 먼저 뽑고자 하는 카드가 포함되어 있는 행을 선택한다.

// 그 다음 선택된 행에 카드들 중 가장 낮은 숫자 카드를 뽑는다.

// 따라서 처음에 카드를 골라날 행을 선택할 때 이후 해당행에서 낮은 카드를 뽑을 것을 고려하여 최종적으로 높은 숫자의 카드를 뽑을 수 있어야 한다.

// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let count = 0;
// let array = [];

// rl.on("line", (input) => {
//   console.log(`Recived : ${input}`);
//   count += 1;
//   array.push(input);
//   if (count === 5) {
//     rl.close();
//   }
// }).on("close", function () {
//   console.log(array);
// });

// let N; // 정수를 저장할 변수
// rl.on("line", function (line) {
//   console.log(`print input string ${line}`);
//   //   N = Number(line);
//   let N = line;
//   console.log(`print input number ${typeof N}`);
//   rl.close();
// });

// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let count = 0;
// let n;
// let m;
// let array = [];

// rl.on("line", (input) => {
//   if (count === 0) {
//     let first = input.split(" ");
//     n = +first[0];
//     m = +first[1];
//     count++;
//   } else {
//     n -= 1;
//     let temp = [];
//     input.split(" ").forEach((num) => temp.push(+num));
//     array.push(temp);

//     if (n === 0) {
//       rl.close();
//     }
//   }
// }).on("close", function () {
//   const answer_arr = [];
//   array.forEach((arr) => answer_arr.push(Math.min(...arr)));

//   console.log(Math.max(...answer_arr));
// });

// ************************************************************************************************************************ //

// 1이 될 때까지
// 어떠한 수 N이 1이 될 때까지 다음의 두 과정 중 반복적으로 선택하여 수행하려고 한다.
// 단 두번째 연산은 N이 K로 나누어떨어질 때만 선택할 수 있다.

// 1. N에서 1을 뺀다
// 2. N을 K로 나눈다

// 나의 코드
// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let n;
// let k;
// let count = 0;

// rl.on("line", (input) => {
//   const arr = input.split(" ").map((number) => +number);

//   n = arr[0];
//   k = arr[1];

//   rl.close();
// }).on("close", function () {
//   while (true) {
//     if (n === 1) break;

//     if (n % k === 0) {
//       n = n /= k;
//       count += 1;
//       console.log("divied");
//       console.log(n);
//     } else {
//       n -= 1;
//       count + 1;
//       console.log("minus");
//     }
//   }

//   console.log(count);
// });

// 개선코드

// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let n;
// let k;
// let result = 0;

// rl.on("line", (input) => {
//   const arr = input.split(" ").map((number) => +number);

//   n = arr[0];
//   k = arr[1];

//   rl.close();
// }).on("close", function () {
//   while (n >= k) {
//     while (n % k !== 0) {
//       n -= 1;
//       result += 1;
//     }

//     n = parseInt(n / k);
//     result += 1;
//   }

//   while (n > 1) {
//     n -= 1;
//     result += 1;
//   }

//   console.log(result);
// });
