const a = Number(cm) > 140 ? "탑승가능" : "탑승금지";
const cm = prompt("손님의 키는?");
window.alert(a);

const num = prompt("숫자");
const all3 = Number(num) % 2 == 1 ? "홀" : "짝";
window.alert(all3);

const aaa = prompt("년도");
const bbb = 2025 - aaa;
const ccc = bbb > Number(20) ? "성인" : "미성년자";
window.alert(ccc);

const ho = prompt("시를 입력하세요");
const mi = prompt("분을 입력하세요");
const sec = prompt("초를 입력하세요");
alert(`${Number(ho) * 3600 + Number(mi) * 60 + Number(sec)}초`);

const num1 = prompt("숫자 입력");
const num2 = prompt("숫자 입력");
const num3 = num1 > num2 ? num1 : num2;
window.alert(num3);
