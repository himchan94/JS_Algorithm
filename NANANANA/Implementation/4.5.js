// 문자열 재정렬

function solution(str) {
  let answer = 0;

  const splitted = str
    .split("")
    .sort()
    .reduce((acc, cur) => {
      const parsedChar = parseInt(cur);
      if (!!!parsedChar) {
        return acc + cur;
      } else {
        answer += parsedChar;
        return acc;
      }
    }, "");

  return `${splitted}${answer}`;
}

console.log(solution("K1KA5CB7"));

function isAlpha(x) {
  return /^[A-Za-z]{1,1}$/.test(x);
}
