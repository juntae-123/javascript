const name = prompt("이름은?");
const age = prompt("나이는?");
const color = prompt("좋아하는 색은?");
console.log(`제 이름은 ${name} 나이는 ${age}살 좋아하는 색은 ${color}입니다`);

const date = prompt("오늘의 날짜는?");
const work = prompt("오늘의 일정");
console.log(`오늘은 ${date}, 계획하신 일정은 ${work} 입니다.`);

const num = prompt("첫번째");
const num1 = prompt("두번째");
const sum = Number(num) - Number(num1);
window.alert(sum);

const food_pay = prompt("음식 가격은?");
const food_num = prompt("갯수");

window.alert(`총합 가격은${Number(food_pay) * Number(food_num)}`);

const sub = prompt("섭씨온도는?");
const hwa = sub * 1.8 + 32;
window.alert(hwa);

const long = prompt("한변의 길이는?");
const all = long * long;
window.alert(all);
