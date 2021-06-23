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

// let a = [
//   [0, 0, 0, 0, 0],
//   [0, 0, 1, 0, 3],
//   [0, 2, 5, 0, 1],
//   [4, 2, 4, 4, 2],
//   [3, 5, 1, 3, 1],
// ];

// let b = [1, 5, 3, 5, 1, 2, 1, 4];

// function solution(board, moves) {
//   let result = 0;
//   let temp = 0;
//   let basket = [];

//   for (let i = 0; i < moves.length; i++) {
//     for (let j = 0; j < board.length; j++) {
//       // 0 1 2 3 4
//       if (board[j][moves[i] - 1] !== 0) {
//         // 0이 아니라면?
//         if (temp === board[j][moves[i] - 1]) {
//           // temp랑 숫자가 같으면?
//           result += 2; // 결과에 2 더함`
//           if (basket.length > 0) {
//             basket.pop();
//             temp = basket[basket.length - 1];
//           } else {
//             temp = 0;
//           }
//         } else {
//           basket.push(board[j][moves[i] - 1]);
//           temp = board[j][moves[i] - 1];
//         }
//         board[j][moves[i] - 1] = 0;
//         break;
//       }
//     }
//   }

//   return result;
// }

// console.log(solution(a, b));

//##########################################오픈채팅방

// let a = [
//   "Enter uid1234 Muzi",
//   "Enter uid4567 Prodo",
//   "Leave uid1234",
//   "Enter uid1234 Prodo",
//   "Change uid4567 Ryan"
// ];

// function solution(record) {
//   var answer = [];

//   //1. 배열 생성
//   var newArr = record.map((str) => str.split(" "));

//   //2. uid와 nickName match
//   // ***Leave인 경우 undefined 고려하기 (예외처리!)
//   var nickNameSet = {};
//   for (var i = 0; i < newArr.length; i++) {
//     if (newArr[i].length === 3) {
//       nickNameSet[newArr[i][1]] = newArr[i][2];
//     }
//   }

//   //3. 출력하기
//   for (var i = 0; i < newArr.length; i++) {
//     if (newArr[i][0] === "Enter") {
//       answer.push(nickNameSet[newArr[i][1]] + "님이 들어왔습니다.");
//     } else if (newArr[i][0] === "Leave") {
//       answer.push(nickNameSet[newArr[i][1]] + "님이 나갔습니다.");
//     }
//   }

//   return answer;
// }

// function solution(record) {
//   const userInfo = {};
//   const action = [];
//   const stateMapping = {
//       'Enter': '님이 들어왔습니다.',
//       'Leave': '님이 나갔습니다.'
//   }

//   record.forEach((v) => {
//       const [state, id, nick] = v.split(' ');
//       console.log(state,id,nick)

//       if(state !== "Change") {
//           action.push([state, id]);
//       }

//       if(nick) {
//           userInfo[id] = nick;
//       }
//   })

//   console.log(action)

//   return action.map(([state, uid]) => {
//       return `${userInfo[uid]}${stateMapping[state]}`;
//   })
// }

// console.log(solution(a))

//########################################## 타겟넘버

// -1+1+1+1+1 = 3
// +1-1+1+1+1 = 3
// +1+1-1+1+1 = 3
// +1+1+1-1+1 = 3
// +1+1+1+1-1 = 3

// class Node {
//   constructor(data) {
//     this.data = data; // 다른 노드와 차별점을 두는 데이터
//     this.children = []; // 자식들과의 정보(주소)를 담을 배열
//   }

//   add(data) {
//     // 자식 추가하는 메소드
//     this.children.push(new Node(data)); // 자식 노드를 생성하고 바로 배열에 저장한다. (주소를 저장하는 행위)
//   }

//   remove(data) {
//     // 자식의 정보를 지우는 메소드
//     this.children = this.children.filter((child) =>
//       child.data === data ? false : true
//     ); // filter 를 거쳐서 해당하는 자식의 정보를 배열에서 빼주면 된다.
//   }
// }

// class Tree {
//   constructor() {
//     this.root = null;
//   }
// }

// const t = new Tree(); // 빈 트리를 생성 해 주고
// console.log(t)
// t.root = new Node("a"); // 루트가 node 'a'의 주소를 가리키면 'a' 의 자식들까지 접근 가능하다.
// t.root.add("b"); // a의 자식 'b', 'c'
// t.root.add("c");
// t.root.children[0].add("d"); // 'b' 의 자식으로 'd'가 추가된다.

// let a = [1, 1, 1, 1, 1];

// function solution(numbers, target) {
//   var answer = 0;

//   function recur(idx, sum){
//       if( idx === numbers.length){
//           if(sum ===target ){
//               answer+=1;
//           }
//           return;
//       }

//       recur(idx+1, sum+numbers[idx]);
//       recur(idx+1, sum-numbers[idx]);
//   }

//   recur(0, 0);

//   return answer;
// }

// console.log(solution(a,3))

//########################################## 124나라

// function solution(n) {
//   let keys = {
//     1: 1,
//     2: 2,
//     3: 4,
//     4: 11,
//     5: 12,
//     6: 14,
//     7: 21,
//     8: 22,
//     9: 24,
//     10: 41
//   };
//   let ans = [];

//   let number_arr = (n + "").split("");
//   // console.log(number_arr);

//   for (let i = 0; i < number_arr.length; i++) {
//     if (number_arr[i] === "1" && number_arr[i + 1] === "0") {
//       ans.push(keys[10]);
//     } else if (number_arr[i] === "0") {
//       continue;
//     } else {
//       ans.push(keys[number_arr[i]]);
//     }
//   }

//   return ans.join("");
// }

// function solution(n) {
//   const number124 = [ 4, 1, 2];
//   let answer = "";

//   while(n){
//       answer = number124[n%3] + answer;
//       n = (n%3 == 0)? n/3 - 1 : Math.floor(n/3);
//       console.log(answer)
//       console.log(n)
//   }

//   return answer
// }

// console.log(solution(4))

//######################################################### 기능개발
// let a = [95, 90, 99, 99, 80, 99]	;
// let b = [1, 1, 1, 1, 1, 1];

// 핵심 : 기능들과 스피드가 짝이되어 각각 올라감.
// function solution(progresses, speeds) {
//   let answer = [];

//   while(speeds.length > 0) { // 스피드 배열을 기준으로 0이되면 종료
//       for(let i=0;i<speeds.length;i++) { // 각 스피드에 맞게 기능을 하나씩 추가
//           if(progresses[i] < 100) {
//               progresses[i] += speeds[i];
//           }
//       }
//       let deploy_count = 0;
//       while(progresses[0] >= 100) { // 100이넘으면 shift, 다음 기능이 100이 되어도 shift
//           progresses.shift();
//           speeds.shift();
//           deploy_count++;
//       }
//       if(deploy_count > 0) { // 결과 배열에 넣어주기
//           answer.push(deploy_count);
//       }
//   }
//   return answer;
// }

// function solution(progresses, speeds) {
//   let answer = [0];
//   let days = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));
//   let maxDay = days[0];

//   for(let i = 0, j = 0; i< days.length; i++){
//       if(days[i] <= maxDay) {
//           answer[j] += 1;
//       } else {
//           maxDay = days[i];
//           answer[++j] = 1;
//       }
//   }

//   return answer;
// }

//######################################################### 문자열 압축
// let a = "aabbaccc";  //2a2ba3c

// function solution(s) {
//   var answer = 0;
//   return answer;
// }

//######################################################### 멀쩡한 사각형

// function solution(w, h) {
//   let total_amount = w * h;
//   let useless = 0;

//   if (w === 1 || h === 1) {
//     total_amount = 0;
//   } else {
//     if (w === h) {
//       useless = w;
//     } else if (w % 2 !== 0 && h % 2 === 0) {
//       useless = (w - 2) * h;
//     } else if (w % 2 === 0 && h % 2 !== 0) {
//       useless = (h - 2) * w;
//     } else if (w % 2 !== 0 && h % 2 !== 0) {
//       useless = Math.floor((w * h) / 2);
//     } else if (w % 2 === 0 && h % 2 === 0) {
//       useless = Math.min(w, h) * 2;
//     }
//   }

//   return total_amount - useless;
// }

// console.log(solution(8, 12));

// function gcd(w, h) {
//   // 처음 W와 H를 받습니다.

//   // W와 H의 나머지를 구합니다.
//   const mod = w % h;

//   // 만약 나머지가 0일 경우 H를 반환합니다.
//   if (mod === 0) {
//     return h;
//   }

//   // 만약 0이 아닐경우 W에 H를 넣고 H에 나머지인 mod를 넣어 해당 함수를 다시 호출해 줍니다.
//   return gcd(h, mod);
// }

// function solution(w, h) {
//   // 최대 공약수를 구해줍니다.
//   const gcdVal = gcd(w, h);

//   // 공식에 맞춰 사용
//   return w * h - (w + h - gcdVal);
// }

// console.log(solution(1, 3));

//########################################################### 수식최대화

//########################################################### N개의 최소공배수
// let a = [2, 6, 8, 14];

// function solution(arr) {
//   function gcd(a, b) {
//     return a % b === 0 ? b : gcd(b, a % b);
//   }
//   let GCD = arr[0];
//   let LCM = arr[0];

//   for (let i = 0; i < arr.length; i++) {
//     GCD = gcd(GCD, arr[i]);
//     LCM = (LCM * arr[i]) / GCD;
//   }

//   return LCM;
// }

// function solution(arr) {
//   let ans = 1;

//   function gcd(a, b) {
//     return a % b === 0 ? b : gcd(b, a % b);
//   }

//   function lcm(a, b) {
//     return (a * b) / gcd(a, b);
//   }

//   for (let i = 0; i < arr.length; i++) {
//     ans = lcm(ans, arr[i]);
//   }

//   return ans;
// }

// console.log(solution(a));

// function test(a,b){
//   return a-b?["true"]:["false"]
// }

// console.log(test(1,1))

//########################################################### JadenCase 문자열 만들기

// function solution(s) {
//   return s.split(" ").map(v => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase()).join(" ");
// }
//########################################################### 행렬의 곱셈

// let a = [
//   [1, 2, 3],
//   [4, 5, 6]
// ];
// let b = [
//   [1, 4],
//   [2, 5],
//   [3, 6]
// ];

// function solution(arr1, arr2){
//   var answer = []
//   var sum = 0
//   var temp = []
//   for(var i=0; i<arr1.length; i++){
//     for(var k=0; k<arr2[0].length; k++){
//       for(var j=0; j<arr2.length; j++){
//         sum = sum + arr1[i][j] * arr2[j][k]
//       }
//       temp.push(sum)
//       sum = 0
//     }
//     answer.push(temp)
//     temp = []
//   }
//   return answer
// }

// function solution(arr1, arr2) {
//   let answer = [];
//   let temp = [];
//   let sum = 0;

//   for (let i = 0; i < arr1.length; i++) {
//     // 0 1 2
//     for (let j = 0; j < arr1[0].length; j++) {
//       for (let k = 0; k < arr2.length; k++) {
//         sum += arr1[i][k] * arr2[k][j];
//       }
//       temp.push(sum);
//       sum = 0;
//     }
//     answer.push(temp);
//     temp = [];
//   }

//   return answer;
// }

// console.log(solution(a,b))

// https://programmers.co.kr/questions/7976

//########################################################### 피보나치 수

// function solution(n) {
//   let arr = [0, 1]; // 0 ->0 1 ->1 2 -> 1 3 -> 2

//   if (n === 1) {
//     return 1%1234567;
//   }

//   for (let i = 2; i < n; i++) {
//     arr[i] = (arr[i - 2] + arr[i - 1])%1234567;
//   }

//   return (arr[n - 2] + arr[n - 1])%1234567;
// }

// console.log(solution(2))

//## 재귀로 풀면 시간초과나옴

//########################################################### 최솟값 만들기
// let a = [1, 4, 2];
// let b = [5, 4, 4];

// function solution(a, b) {
//   a.sort((a, b) => a - b);
//   b.sort((a, b) => b - a);

//   return a.reduce((acc, cur, idx) => acc + cur * b[idx], 0);
// }

// console.log(solution(a, b));

//########################################################### 최댓값과 최솟값

// let a = "1 2 3 4";

// function solution(s) {
//   let ans = [];
//   let str = s.split(" ").sort((a, b) => b - a);
//   ans.push(str[str.length - 1]);
//   ans.push(str[0]);

//   return ans.join(" ");
// }

// console.log(solution(a));

//########################################################## 숫자의 표현

// let a = 15;

// function solution(n) {
//   let cnt = 0;
//   let sum = 0;
//   for (let i = 1; i < n + 1; i++) {
//     sum = 0;
//     let number = i;
//     while (sum < n) {
//       sum += number;
//       number += 1;
//       if (sum === n) {
//         cnt += 1;
//         sum = 0;
//         break;
//       }
//     }
//   }

//   return cnt;
// }

// console.log(solution(15));

// function expressions(num) {
//   var answer = 0;

// for(var i=1; i<=num; i++) {  // 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15
//   if (num%i == 0 && i%2 == 1)  //
//     answer++
// }
//   return answer;
// }

// // 아래는 테스트로 출력해 보기 위한 코드입니다.
// console.log(expressions(a));

//########################################################## 땅따먹기 동적계획법

//[[1,2,3,5]
//[5,6,7,8]
// [4,3,2,1]]

// let a = [
//   [4, 3, 2, 1],
//   [2, 2, 2, 1],
//   [6, 6, 6, 4],
//   [8, 7, 6, 5]
// ];

// function solution(land) {
//   var answer = 0;
//   var len = land.length;

//   for(var i =len-2; i>=0; i--){
//     land[i][0] = Math.max(land[i+1][1], land[i+1][2], land[i+1][3])+land[i][0];
//     land[i][1] = Math.max(land[i+1][0], land[i+1][2], land[i+1][3])+land[i][1];
//     land[i][2] = Math.max(land[i+1][0], land[i+1][1], land[i+1][3])+land[i][2];
//     land[i][3] = Math.max(land[i+1][0], land[i+1][1], land[i+1][2])+land[i][3];
//  }
//  answer = Math.max(...land[0]); /***포인트!!***/

//     return answer;
// }

// function solution(arr) {
//   let temp_index;
//   let sum = 0;

//   sum += Math.max(...arr[0]);
//   temp_index = arr[0].indexOf(Math.max(...arr[0]));
//   console.log("first sum", sum);

//   for (let i = 1; i < arr.length; i++) {
//     let new_arr = arr[i].map((l, idx) => {
//       if (idx === temp_index) {
//         return false;
//       } else return l; // 다음 행렬중 같은 인덱스에 더 작은 값인지 큰값인지 고려해야함
//     });

//     sum += Math.max(...new_arr);
//     console.log("added", sum);
//     temp_index = new_arr.indexOf(Math.max(...new_arr));
//     // console.log(temp_index);

//     // temp_index = arr[i].filter((l,idx)=>l!==temp_index) // temp_index와 다른 값
//     // console.log(arr[i].filter((l,idx)=>idx!==temp_index))
//   }

//   console.log(sum);
// }

// console.log(solution(a));

// function solution(land) {
//   let temp_idx = 0;
//   let is_first = true;
//   let sum = 0;

//   for (let i = 0; i < land.length; i++) {
//     let index = land[i].findIndex((l, idx) => {
//       if (is_first) {
//         if (l === Math.max(...land[i])) {
//           is_first = false;
//           return l;
//         }
//       } else {
//         let new_arr = land[i];
//         new_arr.splice(temp_idx, 1);
//         if (l === Math.max(...new_arr)) {
//           return l;
//         }
//       }
//     });
//     console.log(index);
//     temp_idx = index;
//     sum += land[i][index];
//   }
//   return sum;
// }

// console.log(solution(a));

//##########################################################

// let test = [1, 2, 3, 4];

// function change(arr) {
//   console.log(arr);
//   arr[0] = 7;
//   console.log(arr);
// }

// change(test)

//########################################################## 다음 큰 숫자
// let a = 15;

// function solution(n) {
//   let first_value = count_one(n.toString(2));

//   while (true) {
//     n++;
//     if (first_value === count_one(n.toString(2))) {
//       break;
//     }
//   }
//   console.log(n);
// }

// function count_one(number) {
//   let cnt = 0;
//   number.split("").forEach((l, idx) => {
//     if (l === "1") {
//       cnt += 1;
//     }
//   });
//   return cnt;
// }

// console.log(solution(a));

// 비트연산자를 활용한 풀이 한 번 봐!!

//########################################################## 방금 그곡
// let a = "ABC";
// let b = ["12:00,12:14,HELLO,CDEFGAB", "13:00,13:14,WORLD,ABCDEF"];
// // 시간 먼저 구함 -> 시간과 음정보 길이 확인

// function solution(m, musicinfos) {
//   let ans = [];

//   let newM = m
//     .replace(/(C#)/g, "c")
//     .replace(/(D#)/g, "d")
//     .replace(/(F#)/g, "f")
//     .replace(/(G#)/g, "g")
//     .replace(/(A#)/g, "a")
//     .replace(/(E#)/g, "e");

//   let newMusicInfos = musicinfos.map((str) =>
//     str
//       .replace(/(C#)/g, "c")
//       .replace(/(D#)/g, "d")
//       .replace(/(F#)/g, "f")
//       .replace(/(G#)/g, "g")
//       .replace(/(A#)/g, "a")
//       .replace(/(E#)/g, "e")
//   );

//   let reg = /c|C|d|D|E|f|F|g|G|a|A|B|e/gm;

//   let regx = new RegExp(newM, "gm");
//   let n = 1;

//   for (let i = 0; i < newMusicInfos.length; i++) {
//     let time = getTime(newMusicInfos[i]);
//     let title = newMusicInfos[i].split(",")[2];
//     let sound = newMusicInfos[i].split(",")[3].match(reg); // ["c","d","e","f","f","a","b"]
//     let repeated = Array.apply(null, Array(time)).map((l, idx) => {
//       return sound[idx % sound.length];
//     });

//     if (repeated.join("").match(regx) !== null) {
//       let obj = new Object();
//       obj.name = title;
//       obj.time = time;
//       obj.length = title.length;
//       obj.order = n;
//       ans.push(obj);
//       n++;
//     }
//   }

//   if (ans.length === 0) {
//     return "(None)";
//   }

//   if (ans.length === 1) {
//     return ans[0]["name"];
//   } else {
//     // 1.출력시간 2.길이
//     ans.sort((a, b) => b["time"] - a["time"]);

//     let maxTime = ans[0]["time"];

//     let timeChecked = ans.filter((l, idx) => {
//       if (l.time === maxTime) {
//         return l;
//       }
//     });

//     if (timeChecked.length === 1) {
//       return timeChecked[0].name;
//     } else {
//       timeChecked.sort((a, b) => b.length - a.length);
//       let maxLength = timeChecked[0].length;
//       let lengthChecked = timeChecked.filter((l, idx) => {
//         if (l.length === maxLength) {
//           return l;
//         }
//       });

//       if (lengthChecked.length === 1) {
//         return lengthChecked[0].name;
//       }
//       lengthChecked.sort((a, b) => a.order - b.orer);
//       return lengthChecked[0].name;
//     }
//   }
// }

// function getTime(str) {
//   let regx = /\d\d/gm;
//   let result = str.match(regx);
//   let hours = parseInt(result[2]) - parseInt(result[0]);
//   let min = parseInt(result[3]) - parseInt(result[1]);

//   return hours * 60 + min;
// }

// console.log(solution(a, b));

// function solution(m, musicinfos) {
//   const _m = m.replace(/(\D)#/g, (s, p1) => p1.toLowerCase());

//   const broadcast = musicinfos.map((x) => {
//     const info = x.split(",");
//     const song = info[3].replace(/(\D)#/g, (s, p1) => p1.toLowerCase());
//     return [
//       info[2],
//       play(toMinute(info[1].split(":")) - toMinute(info[0].split(":")), song),
//     ];
//   });
//   const answer = broadcast.reduce((answer, x) => {
//     if (x[1].includes(_m)) {
//       if (answer.length == 0 || answer[1].length < x[1].length) return x;
//     }
//     return answer;
//   }, []);
//   return answer.length == 0 ? "(None)" : answer[0];
// }

// function toMinute(t) {
//   return t[0] * 60 + t[1] * 1;
// }

// function play(time, song) {
//   const length = song.length;
//   return song.repeat(time / length) + song.substring(0, time % length);
// }

//########################################################## 방문길이
// U: 위쪽으로 한 칸 가기

// D: 아래쪽으로 한 칸 가기

// R: 오른쪽으로 한 칸 가기

// L: 왼쪽으로 한 칸 가기

// function solution(dirs) {
//   let ans = [];
//   let target = { x: 0, y: 0 };
//   let new_ans = [];

//   for (let i = 0; i < dirs.length; i++) {
//     let obj = new Object();
//     switch (dirs[i]) {
//       case "U":
//         target.y += 1;
//         obj.x = target.x;
//         obj.y = target.y;
//         ans.push(obj);
//         break;

//       case "D":
//         target.y -= 1;
//         obj.x = target.x;
//         obj.y = target.y;
//         ans.push(obj);
//         break;

//       case "R":
//         target.x += 1;
//         obj.x = target.x;
//         obj.y = target.y;
//         ans.push(obj);
//         break;

//       case "L":
//         target.x -= 1;
//         obj.x = target.x;
//         obj.y = target.y;
//         ans.push(obj);
//         break;

//       default:
//         break;
//     }
//   }
//   ans.forEach((l, idx) => {});
// }

// console.log(solution("ULURRDLLU"));

// function solution(dirs) {
//   var answer = 0;
//   const defaultLocation = { x: 0, y: 0 };
//   const path = {};
//   for (let move of dirs) {
//     let currentLocation = `${defaultLocation.x}${defaultLocation.y}`;
//     switch (move) {
//       case "U":
//         if (defaultLocation.x + 1 <= 5) defaultLocation.x += 1;
//         break;
//       case "D":
//         if (defaultLocation.x - 1 >= -5) defaultLocation.x -= 1;
//         break;
//       case "R":
//         if (defaultLocation.y + 1 <= 5) defaultLocation.y += 1;
//         break;
//       case "L":
//         if (defaultLocation.y - 1 >= -5) defaultLocation.y -= 1;
//         break;
//     }
//     let movedLocation = `${defaultLocation.x}${defaultLocation.y}`;
//     if (currentLocation === movedLocation) continue;
//     else {
//       const resultLocation = currentLocation + " to " + movedLocation;
//       console.log(resultLocation)
//       const reverseLocation = movedLocation + " to " + currentLocation;
//       console.log(reverseLocation)
//       if (path[resultLocation] !== 1 && path[reverseLocation] !== 1)
//         path[resultLocation] = 1;
//         console.log(path)
//     }
//   }
//   answer = Object.keys(path).length;
//   return answer;
// }

// function solution(dirs) {
//   let answer = [];
//   let gps = [0, 0];
//   dirs.split("").forEach((value) => {
//     let ret = false;
//     const pre_gps = gps.concat();
//     if (value == "U" && gps[1] < 5) {
//       gps[1] += 1;
//       ret = true;
//     } else if (value == "D" && gps[1] > -5) {
//       gps[1] -= 1;
//       ret = true;
//     } else if (value == "R" && gps[0] < 5) {
//       gps[0] += 1;
//       ret = true;
//     } else if (value == "L" && gps[0] > -5) {
//       gps[0] -= 1;
//       ret = true;
//     }
//     //길은 양뱡향이 아닌 단방향으로 취급("L,R" => ret : 1)
//     const filter = answer.filter((item) => {
//       return (
//         (item[0] == pre_gps[0] &&
//           item[1] == pre_gps[1] &&
//           item[2] == gps[0] &&
//           item[3] == gps[1]) ||
//         (item[0] == gps[0] &&
//           item[1] == gps[1] &&
//           item[2] == pre_gps[0] &&
//           item[3] == pre_gps[1])
//       );
//     });
//     if (ret && filter.length == 0) answer.push(pre_gps.concat(gps));
//   });

//   return answer.length;
// }

// let test = [0, 0];
// console.log(test.concat());

// var arrOfObj = [
//   {
//     name:'abc',age:27
//   },
//   {
//     name:'pqr',age:27
//   },
//   {
//     name:'abc',age:27
//   },
//  ]
// var dataArr = arrOfObj.map(item=>{
//     return [item.name,item]
// }); // creates array of array

// console.log("dataArr",dataArr)
// var maparr = new Map(dataArr); // create key value pair from array of array

// console.log(maparr)

// var result = [...maparr.values()];//converting back to array from mapobject

// console.log(result); //[{"name":"abc","age":27},{"name":"pqr","age":27}]

//########################################################## 쿼드압축

// function quad(array, size, countArray, start) {
//   const first = array[start[0]][start[1]]; // 시작 지점의 값
//   if (size === 1) {
//     // size가 1이면 마지막이다. first 값에 따라서 countArray의 값을 증가시켜준다.
//     first === 0 ? (countArray[0] += 1) : (countArray[1] += 1);
//     return;
//   }

//   const half = size / 2; // 정사각형의 절반 가로, 세로 동일
//   let keep = true;

//   for (let i = start[0]; i < start[0] + size; i++) {
//     for (let j = start[1]; j < start[1] + size; j++) {
//       // 모든 값이 다 같은지 확인한다. 하나라도 다르면 keep을 false로 변경
//       if (first !== array[i][j]) {
//         keep = false;
//         break;
//       }
//     }
//     if (!keep) break;
//   }
//   // keep이 true일 경우 모두가 다 같다는 뜻이므로, 하나만 확인하여 증가시켜 주면 된다. 그리고 안에 더 확인할 필요가 없으니 return
//   if (keep) {
//     first === 0 ? countArray[0]++ : countArray[1]++;
//     return;
//   }
//   // keep이 false 일 경우 4등분하여 다시 해주면 된다.
//   quad(array, half, countArray, start);
//   quad(array, half, countArray, [start[0], start[1] + half]);
//   quad(array, half, countArray, [start[0] + half, start[1]]);
//   quad(array, half, countArray, [start[0] + half, start[1] + half]);
//   return;
// }

// function solution(arr) {
//   const countArray = [0, 0];
//   const size = arr.length;
//   quad(arr, size, countArray, [0, 0]);
//   return countArray;
// }

// console.log(solution([[1,1,0,0],[1,0,0,0],[1,0,0,1],[1,1,1,1]]	))

//########################################################## 스킬트리
// let a = "CBD";
// let b = ["BACDE", "CBADF", "AECB", "BAD"];

// function solution(skill, skill_trees) {
//   let skillOrder = skill.split("");
//   let orderCheck = [];

//   for (let i = 0; i < skill_trees.length; i++) {
//     let skill = skill_trees[i].split(""); // B A C D E  CBD의 인덱스값 찾아 배열에 넣기
//     for (let j = 0; j < skill.length; j++) {
//       for (let k = 0; k < skillOrder.length; k++) {
//         if (skill[j] === skillOrder[k]) {
//           orderCheck.push(skill[j]);
//         }
//       }
//     }

//     orderCheck.forEach((l,idx)=>{})
//   }

//   console.log(orderCheck);
// }

// console.log(solution(a, b));

// let test1 = "abcde"
// let test2 = [1,2]

// console.log(test1.substring(0,4))

// function solution(skill, skill_trees) {
//   let newArr = skill.split("");
//   let str = 0;
//   let count = 0;
//   for (let i = 0; i < skill_trees.length; i++) {
//     str = skill_trees[i]
//       .split("")
//       .filter((element) => newArr.includes(element))
//       .join("");
//       console.log("str",str)
//     console.log(skill.substring(0, str.length));
//     if (str === skill.substring(0, str.length)) {
//       count++;
//     }
//   }
//   return count;
// }

// function solution(skill, skill_trees) {
//     var answer = 0;
//     var regex = new RegExp(`[^${skill}]`, 'g');

//     return skill_trees
//         .map((x) => x.replace(regex, ''))
//         .filter((x) => {
//             return skill.indexOf(x) === 0 || x === "";
//         })
//         .length
// }

//##########################################################점프와 순간이동

// 1 :점프 1
// 2 점프 1 순간이동 1
// 3 : 점프 1 순간이동 1 점프 1
// 4 : 점프 2 순간이동 2
// 5 : 점프 1 순간이동 2 순간이동 4 점프 1
// 6 : 점프 1 순간 2 점프 3 순간 6 점프 1
// 7 : 점프 1 순간 2 점프 3 순간 6 점프 1
// 8 : 점프 1 순간 2 순간 4 순간 8
// 9 : 점프 1 순간 2 순간 4 순간 8 점프 1
// 10 :

// 동적계획법 문제
// function solution(n) {
//   var answer = 0;

//   while (n > 0) {
//     if (n % 2 == 0) {
//       n /= 2;
//     } else {
//       n -= 1;
//       answer += 1;
//     }
//   }

//   return answer;
// }

// console.log(solution(5000));

// let test = 4999

// console.log(Array.from(test.toString(2)))
//##########################################################이진변환 반복하기

// function solution(s) {
//   var answer = [0, 0];

//   makeNew(s, answer);

//   return answer;
// }

// function makeNew(s, score) {
//   let arr = s.split("");

//   if (s === "1") {
//     return;
//   }

//   score[0] += 1;
//   let newArr = arr.filter((l, idx) => {
//     if (l === "0") {
//       score[1] += 1;
//     }

//     if (l !== "0") {
//       return l;
//     }
//   });
//   console.log(newArr.length);
//   let lenToStr = newArr.length.toString(2);
//   console.log(lenToStr);

//   return makeNew(lenToStr, score);
// }

// console.log(solution("1111111"));

// ######################## 실험
// function test(a) {
//   sum(a);

//   return a;
// }

// function sum(a) {
//   a[0] += 1;
// }

// console.log(test([0, 0]);
// ######################## 실험

// ######################## 구명보트

// let a = [70];
// let b = 100;

// function solution(people, limit) {
//   let ans = [];

//   for (let i = 0; i < people.length; i++) {
//     if (people[i] <= limit) {
//       for (let j = i + 1; j < people.length; j++) {
//         let Arr = new Array();
//         if (people[i] + people[j] <= limit) {
//           Arr.push(people[i]);
//           Arr.push(people[j]);
//           ans.push(Arr);
//         }
//       }
//     }
//   }

//   for (let k = 0; k < ans.length; k++) {
//     ans[k].forEach((l, idx) => {
//       people.splice(
//         people.findIndex((idx) => idx === l),
//         1
//       );
//     });
//   }

//   return people.length + ans.length;
// }

// function solution(people, limit){
// 	var answer = 0
//     people.sort((a,b) => b-a)
//     let l = 0
//     let r = people.length-1

//     while(l<r){
//     	var sum = people[l] + people[r]
//         if(sum>limit){
//         	l++
//         } else {
//         	l++
//             r--
//         }
//         answer++
//     }
//     if(l == r) answer++
//     return answer
// }

// function solution(people, limit) {
//     people.sort(function(a, b){return a-b});
//     for(var i=0, j=people.length-1; i < j; j--) {
//         if( people[i] + people[j] <= limit ) i++;
//     }
//     return people.length-i;
// }

// console.log(solution(a, b));

// let test = [1, 2, 3, 4];

// test.splice(1, 1);

// console.log(test);

// ############################### 1차 캐시

// let size = 2;
// let city = ["Jeju", "Pangyo", "NewYork", "newyork"];

// function solution(cacheSize, cities) {
//   let cache = [];
//   let time = 0;

//   // cache hit일 경우 실행시간은 1이다.
//   // cache miss일 경우 실행시간은 5이다.

//   cities
//     .map((l, idx) => l.toUpperCase())
//     .forEach((l, idx) => {
//       if (cache.findIndex((city) => city === l) === -1) {
//         cache.push(l);
//         time += 5;
//         if (cache.length > cacheSize) {
//           cache.shift();
//         }
//       } else {
//         let index = cache.findIndex((city) => city === l);
//         cache.push(...cache.splice(index, 1));
//         time += 1;
//       }
//     });

//   // console.log(cache);
//   // console.log(time);
//   return time;
// }

// console.log(solution(size, city));

// // let test = [1, 2, 3, 4];
// // console.log(test.push(...test.splice(0, 1)));
// // console.log(test);

// let test = "apple";

// console.log(test.toUpperCase);

// ############################### 영어 끝말있기

// let a = [
//   "tank",
//   "kick",
//   "know",
//   "wheel",
//   "land",
//   "dream",
//   "mother",
//   "robot",
//   "tank"
// ];

// function solution(n, words) {
// let temp = []

// for(let i = 0; i<words.length; i++){

// }

// }

// console.log(solution(3, a));

// ############################### 프렌즈 4 블록

//m은 판의 높이 n은 폭
// let a = 4;
// let b = 5;
// let c = ["CCBDE", "AAADE", "AAABF", "CCBBF"];

// function solution(m, n, board) {
//   board = board.map((v) => v.split(""));
//   // console.log(board);

//   while (true) {
//     let founded = [];

//     // 찾기 - 네 개중 우측 하단 모서리 인덱스 기준
//     for (let i = 1; i < m; i++) {
//       for (let j = 1; j < n; j++) {
//         if (
//           board[i][j] &&
//           board[i][j] === board[i][j - 1] &&
//           board[i][j] === board[i - 1][j - 1] &&
//           board[i][j] === board[i - 1][j]
//         ) {
//           founded.push([i, j]);
//         }
//       }
//     }

//     if (!founded.length) return [].concat(...board).filter((v) => !v).length; // 0의 갯수를 세면 없어진 것들의 갯수

//     // 부수기 - 지워질 것 0으로 채우기
//     founded.forEach((a) => {
//       board[a[0]][a[1]] = 0;
//       board[a[0]][a[1] - 1] = 0;
//       board[a[0] - 1][a[1] - 1] = 0;
//       board[a[0] - 1][a[1]] = 0;
//     });

//     for (let i = m - 1; i > 0; i--) {
//       // console.log("i", i);
//       // console.log(board[i].some((v) => !v));
//       if (!board[i].some((v) => !v)) continue; // 0이 있으면 다음 i로 넘어가므

//       for (let j = 0; j < n; j++) {
//         for (let k = i - 1; k >= 0 && !board[i][j]; k--) {
//           // console.log("k", k);
//           // console.log("board", board[k][j]);
//           if (board[k][j]) {
//             board[i][j] = board[k][j];
//             board[k][j] = 0;
//             // console.log(board);
//             break;
//           }
//         }
//       }
//     }
//   }
// }

// console.log(solution(a, b, c));

// if (!founded.length) return [].concat(...board).filter((v) => !v).length;

// let test1 = [];

// console.log(test1.concat(...test).filter((l) => l));
// console.log(test.some((l) => !l));
// console.log([].concat(...c.map((v) => v.split(""))));

// let test = [];

// if (!test[0]) {
//   // 뒷 부분이 아닐때 false일 때
//   console.log("hi");
// }

// let test = [];
// let test1 = 0;

// for (let i = 0; i < 3; i++) {
//   test.push(1);
//   test1++;
//   console.log(`test${i}`, test);
//   console.log(test1);
// }

// var color = "red";
// function foo() {
//   var color = "blue";

//   //bar는 외부 렉시컬 환경 참조로 foo의 color를 저장
//   function bar() {
//     console.log(color);
//   }

//   return bar;
// }

// function celebrityName(firstName) {
//   var nameIntro = "This is celebrity is ";
//   // 이 내부 함수는 외부함수의 파라미터에 접근할 수 있습니다.
//   function lastName(theLastName) {
//     return nameIntro + firstName + " " + theLastName;
//   }
//   return lastName;
// }

// var kName = celebrityName("kang"); // 여기서 celebrityName 외부함수가 리턴됩니다
// // 외부함수가 위에서 리턴된 후에, Closure(lastName)가 호출됩니다.
// // 아직, Closure는 외부함수의 변수와 파라미터에 접근 가능합니다.
// kName("dave"); // Output 'This is celebrity is kang dave'

// console.log(kName("dave"));

// let flag = true;

// for (var i = 0; i < 9 && flag; i++) {
//   console.log(i);
//   // 기타 등등
// }