// 짝수의 스티커는 길이 / 2의 갯수의 스티커를 뽑는다.
// 홀수의 스티커는 길이 /2 -1 갯수의 스티커를 뽑는다.

// 14, 6, 5, 11, 3, 9, 2, 10

// 14 5 3 2
// 6 11 9 10
// 5 3 2 14
// 11 9 10 6

// 3 2 14 5
// 9 10 6 11
// 2 14 5 3
// 10 6 11 9

function solution(sticker) {
  const sticker_length = sticker.length;
  const number_array = [];
  let last_index = sticker_length - 1;

  if (sticker_length % 2 === 0) {
    for (let i = 0; i < sticker_length / 2; i++) {
      let sum = 0;

      for (let j = i; j <= i + sticker_length - 2; j += 2) {
        if (j > last_index) {
          sum += sticker[j - sticker_length];
        } else {
          sum += sticker[j];
        }
      }
      number_array.push(sum);

      // sticker[0] + sticker [2] + sticker[4] + sticker[6]
      // sticker[1] + sticker [3] + sticker[5] + sticker[7]
      // sticker[2] + sticker [4] + sticker[6] + sticker[8]
      // sticker[3] + sticker [5] + sticker[7] + sticker[9]
    }
  } else {
    for (let i = 0; i <= last_index; i++) {
      let sum = 0;
      if (i === 0) {
        for (let j = i; j <= last_index; j += 2) {
          sum += sticker[j];
          console.log(sum);
        }
      } else {
        for (let j = i; j <= i + Math.floor(sticker_length / 2); j += 2) {
          if (j > last_index) {
            sum += sticker[j - sticker_length];
          } else {
            sum += sticker[j];
          }
        }
      }
      number_array.push(sum);
    }
  }

  return Math.max(...number_array);
}

console.log(solution([1, 3, 2, 5, 4]));

// [1, 3, 2, 5, 4]

// 1 2 4

// 3[1] 5[3]

// 2[2] 4[4]

// 5[3]  1[5]
// 4[4]  3[6]
