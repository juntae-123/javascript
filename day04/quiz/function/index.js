// function[함수]
//입력: x
//출력: x + 100

function plus100(x) {
  return x + 100;
}

//plus100 [함수 이름]
const a = plus100(500);
console.log(a); // 600

function twice(x) {
  return x * 2;
}

const b = twice(300);
console.log(b);

function luckybiky(luck) {
  return luck + "럭키비키잖아";
}
const c = luckybiky("이거 완전");
console.log(c);

function num(x) {
  return x % 2 ? "홀수" : "짝수";
}
const aa = num(3);
console.log(aa);
