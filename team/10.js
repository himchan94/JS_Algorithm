// 1번 풀이
const base = [" ", " ", " ", " ", "*"];
console.log(base.join(""));

for (let i = 0; i < 4; i++) {
  const backIndex = base.findIndex((item) => item === "*");
  base.splice(backIndex - 1, 1, "*");
  base.splice(base.length, 0, "*");
  console.log(base.join(""));
}

// 2번 풀이
const blank = " ";
const star = "*";

function tree(N) {
  for (let i = 0; i < N; i++) {
    let a = "";
    let b = N - i;
    for (let j = 1; j < b; j++) {
      a += blank;
    }
    for (let j = 0; j < i + 1; j++) {
      a += star;
    }
    for (let j = 0; j < i; j++) {
      a += star;
    }
    console.log(a);
  }
}

tree(5);
