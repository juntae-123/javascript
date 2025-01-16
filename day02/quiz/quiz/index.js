const food = prompt("좋아하는 음식은?");
const spe = prompt("최근에 갔던 장소는?");
console.log(`최근에 갔던${spe}에서 ${food}를 먹고 싶어요!`);

const cm = prompt("키는?");
const kg = prompt("몸무게는?");
const bmi = Number(kg) / (Number(cm) * Number(cm));
window.alert(bmi);

const money = prompt("1usd = 몇 원?");
const usd = prompt("얼마를 환전하겠습니까?");
const all = Number(money) * Number(usd);
window.log(`${usd}달러는 ${all}원 입니다`);

const btc = prompt("1BTC 의 현재 시세");
const han = prompt("몇 BTC를 환산하고 싶습니까?");
const result = Number(btc) * Number(han);
console.log(result);
