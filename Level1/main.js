// Programmers 프로그래머스 코딩테스트 연습 - 체육복 (JavaScript)

// function solution(n, lost, reserve) {
//   var realLost = lost.filter((a) => !reserve.includes(a));
//   var realReserve = reserve.filter((a) => !lost.includes(a));

//   return (
//     n -
//     realLost.filter((a) => {
//       // [2,4]
//       var b = realReserve.find((r) => Math.abs(r - a) <= 1); //[2,4] [1,3,5]
//       if (!b) return true;
//       realReserve = realReserve.filter((r) => r !== b);
//     }).length
//   );
// }

// console.log(solution(5, [2, 4], [1, 3, 5]));

// let test = [1, 2, 3, 4, 5];

// console.log(
//   test.filter((num) => {
//     if (num === 3) return true;
//   })
// );

//############################################################################################################################################

// 1차 비밀지도

// function solution(n, arr1, arr2) {
//   var answer = [];

//   for (let i = 0; i < n; i++) {
//     let num1 = arr1[i].toString(2);
//     let num2 = arr2[i].toString(2);
//     let add1 = "";
//     let add2 = "";
//     let ans = "";

//     if (num1.length !== n) {
//       for (let j = 0; j < n - num1.length; j++) {
//         add1 += "0";
//       }
//       num1 = add1 + num1;
//     }
//     if (num2.length !== n) {
//       for (let j = 0; j < n - num2.length; j++) {
//         add2 += "0";
//       }
//       num2 = add2 + num2;
//     }
//     console.log("num1=", num1);
//     console.log("num2=", num2);
//     for (let k = 0; k < num1.length; k++) {
//       if (num1[k] === "1" || num2[k] === "1") {
//         ans += "#";
//       } else if (num1[k] === "0" && num2[k] === "0") {
//         ans += " ";
//       }
//     }
//     answer.push(ans);
//   }
//   return answer;
// }

// let a = 6;
// let b = [46, 33, 33, 22, 31, 50];
// let c = [27, 56, 19, 14, 14, 10];

// console.log(solution(a, b, c));

// function solution(n, arr1, arr2) {
//   let num1, num2, s;
//   let answer = [];
//   //manually turning decimals to binaries cos i can!
//   for (let i = 0; i < n; i++) {
//     num1 = arr1[i];
//     num2 = arr2[i];
//     s = "";
//     for (let j = 0; j < n; j++) {
//       s = (num1 % 2) + (num2 % 2) ? "#" + s : " " + s;
//       num1 = Math.floor(num1 / 2);
//       num2 = Math.floor(num2 / 2);
//     }
//     answer.push(s);
//   }
//   return answer;
// }

//#############################################################

// [2,1,3,4,1]	[2,3,4,5,6,7]
//[5,0,2,7]	[2,5,7,9,12]

// function solution(numbers) {
//   var answer = [];
//   for (let i = 0; i < numbers.length; i++) {
//     for (let j = i + 1; j < numbers.length; j++) {
//       answer.push(numbers[i] + numbers[j]);
//     }
//   }
//   answer = [...new Set(answer)];

//   return [...new Set(answer)].sort((a, b) => a - b);
// }

// let a = [5, 0, 2, 7];

// console.log(solution(a));

//########################################################################################
// 자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.
// 45 -> 7
// 125 -> 229

// function solution(n) {
//   var answer = 0;
//   let temp = n.toString(3).split("").reverse(); // [0,0,2,1]

//   for (let i = 0; i < temp.length; i++) {
//     answer += Math.pow(3, temp.length - 1 - i) * temp[i];
//   }

//   return answer;
// }

// console.log(solution(45));

// const solution = (n) => {
//   return parseInt([...n.toString(3)].reverse().join(""), 3);
// };

//################################################################################# 실패율

//스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수

//전체 스테이지의 개수 N, 게임을 이용하는 사용자가 현재 멈춰있는 스테이지의 번호가 담긴
//배열 stages가 매개변수로 주어질 때, 실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열을 return 하도록 solution 함수를 완성하라.

//################################################################################# 약수의 개수와 덧셈

//13 17 43
// 24	27	52

// function solution(left, right) {
//   var answer = 0;
//   for (let i = left; i <= right; i++) {
//     find(i) % 2 === 0 ? (answer += i) : (answer -= i);
//   }

//   return answer;
// }

// function find(num1) {s
//   let answer = [];

//   let dividing_number = 1;
//   let divided_number = num1; //13
//   while (dividing_number <= divided_number) {
//     if (divided_number % dividing_number === 0) {
//       answer.push(divided_number / dividing_number);
//       answer.push(dividing_number);
//       dividing_number += 1;
//     } else {
//       dividing_number += 1;
//     }
//   }
//   answer = [...new Set(answer)].sort((a, b) => a - b);

//   return answer.length;
// }

// console.log(find(13, 13));

// function solution(left, right) {
//   var answer = 0;
//   for (let i = left; i <= right; i++) {
//     if (Number.isInteger(Math.sqrt(i))) {
//       answer -= i;
//     } else {
//       answer += i;
//     }
//   }
//   return answer;
// }

//################################################################################# 실패율

// function solution(N, stages) {
//   var answer = [];
//   let new_stage = stages.sort((a, b) => a - b);
//   let length = new_stage.length;
//   let new_ans = [];

//   for (let i = 1; i <= N; i++) {
//     let num = new_stage.filter((a) => a === i).length;
//     answer.push(num / length);
//     length -= num;
//   }

//   answer.map((l, idx) => {
//     let obj = new Object();
//     obj["stage"] = idx + 1;
//     obj["score"] = l;
//     new_ans.push(obj);
//   });
//   answer = [];
//   new_ans
//     .sort((a, b) => b.score - a.score)
//     .map((l, idx) => answer.push(l.stage));
//   return answer;
// }

//################################################################################# 새로운 아이디 만들기!
// function solution(new_id) {
//   let test = new_id.toLocaleLowerCase();
//   let regx = /([a-z0-9-_.])+/gm;

//   let result = test.match(regx).join("");
//   // console.log("result", result);
//   console.log("test0", result);

//   result = result.replace(/\.{2,}/gm, ".");

//   console.log("test1", result);

//   let split_result = result.split("");
//   // console.log(split_resut)
//   /// 앞 or 뒤가 .인지 확인

//   if (split_result[0] === ".") {
//     split_result.shift();
//   }

//   if (split_result[split_result.length - 1] === ".") {
//     split_result.pop();
//   }

//   ///a 대입
//   if (split_result.length === 0) {
//     split_result.push("a");
//   }

//   // 16자 이상이면? 15까지만 놔두기
//   if (split_result.length >= 16) {
//     split_result = split_result.slice(0, 15);
//   }

//   if (split_result[split_result.length - 1] === ".") {
//     split_result.pop();
//   }

//   // z - -
//   if (split_result.length <= 2) {
//     for (let i = split_result.length; i < 3; i++) {
//       split_result.push(split_result[split_result.length - 1]);
//     }
//   }

//   return split_result.join("");
// }

//#################################################################################

// function solution(answers) {
// let list =[]
// let rank =[]

// let arr_a = []
// let arr_b = []
// let arr_c = []

// let pattern_a =[1,2,3,4,5]
// let pattern_b =[2,1,2,3,2,4,2,5]
// let pattern_c = [3,3,1,1,2,2,4,4,5,5]

// for(let i = 0; i<answers.length;i++){
//   arr_a.push(pattern_a[i-5*Math.floor(i/5)])
//   arr_b.push(pattern_b[i-8*Math.floor(i/8)])
//   arr_c.push(pattern_c[i-10*Math.floor(i/10)])
// }

// let ans = [arr_a, arr_b, arr_c]

// for(let i = 0; i<3; i++){
//   let obj = new Object
//   obj["pattern"] = i+1
//   obj["score"] = ans[i].filter((l,idx)=>l===answers[idx]).length
//   list.push(obj)
// }

// list.sort((a,b)=>b.score-a.score)
// console.log(list)

// if(list[0].score !== list[1].score){
//   rank.push(list[0].pattern)
// } else{
//   rank.push(list[0].pattern)
//   rank.push(list[1].pattern)

//   if(list[1].score ===list[2].score ){
//     rank.push(list[2].pattern)
//   }
// }

// return rank
// }

// console.log(solution(a))

//#############################################
// function solution(answers) {
//     var answer = [];
//     var a1 = [1, 2, 3, 4, 5];
//     var a2 = [2, 1, 2, 3, 2, 4, 2, 5]
//     var a3 = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

//     var a1c = answers.filter((a,i)=> a === a1[i%a1.length]).length;
//     var a2c = answers.filter((a,i)=> a === a2[i%a2.length]).length;
//     var a3c = answers.filter((a,i)=> a === a3[i%a3.length]).length;
//     var max = Math.max(a1c,a2c,a3c);

//     if (a1c === max) {answer.push(1)};
//     if (a2c === max) {answer.push(2)};
//     if (a3c === max) {answer.push(3)};

//     return answer;
// }

//######################################## 비밀번호 입력

// let a = [45, 4, 35, 20, 3, 9];
// let b = [20, 9, 3, 45, 4, 35];

// function solution(lottos, win_nums) {
//   let zero_num = 6 - lottos.filter((l, idx) => l !== 0).length;
//   let ans_arr = [];

//   let obj = {
//     6: 1,
//     5: 2,
//     4: 3,
//     3: 4,
//     2: 5,
//     1: 6,
//     0: 6
//   };

//   lottos.map((l, idx) => {
//     if (win_nums.indexOf(l) !== -1) {
//       ans_arr.push(l);
//     }
//   });

//   let max = ans_arr.length + zero_num;
//   let min = ans_arr.length;

//   if (ans_arr.length === 0 && zero_num !== 0) {
//     min = 1;
//   }
//   console.log(zero_num);

//   return [obj[max], obj[min]];
// }

// console.log(solution(a, b));

// function solution(lottos, win_nums) {
//   const rank = [6, 6, 5, 4, 3, 2, 1];
//   let answer = [],
//       ans = [],
//       ans1 = [];

//   lottos.map(x => {
//       let val = win_nums.find(y => y == x);

//       if(x == 0) ans1.push(x)
//       if(val) {
//           ans.push(val)
//           ans1.push(val)
//       }
//   })
//   answer.push(rank[ans1.length])
//   answer.push(rank[ans.length])

//   return answer;
// }

//########################################## 크레인 인형뽑기 게임

let a = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

let b = [1, 5, 3, 5, 1, 2, 1, 4];

function solution(board, moves) {
  let result = 0;
  let temp = 0;
  let basket = [];

  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[j][moves[i] - 1] !== 0) {
        // 0이 아니라면?
        if (temp === board[j][moves[i] - 1]) {
          // temp랑 숫자가 같으면?
          result += 2; // 결과에 2 더함
          if (basket.length > 0) {
            basket.pop();
            temp = basket[basket.length - 1];
          } else {
            temp = 0;
          }
        } else {
          basket.push(board[j][moves[i] - 1]);
          temp = board[j][moves[i] - 1];
        }
        board[j][moves[i] - 1] = 0;
        break;
      }
    }
  }

  return result;
}

console.log(solution(a, b));
