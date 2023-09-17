function solution(n, m, section) {
  var answer = 0;
  let index = 0;
  const checker = Array(n).fill(0);

  while (index < section.length) {
    let currentSection = section[index];
    let target = checker[currentSection - 1];
    if (index === section.length - 1 && target) {
      break;
    }

    if (!target) {
      if (
        checker.slice(currentSection - 1, currentSection - 1 + m).length === m
      ) {
        for (let i = currentSection - 1; i < currentSection - 1 + m; i++) {
          checker[i] = 1;
        }
      } else {
        for (let i = currentSection - 1; i > currentSection - 1 - m; i--) {
          checker[i] = 1;
        }
      }
      answer += 1;
    }
    index += 1;
  }

  return answer;
}

console.log(solution(4, 1, [1, 2, 3, 4]));
