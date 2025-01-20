const bustypy = +prompt("숫자 입력");
const age = +prompt("나이 입력");
const bus = ["시내버스", "광역버스", "마을버스"];
const bus_pay = [1200, 2000, 1000];

if (age <= 7 || 65 <= age) alert("무료");
else if (8 <= age && age <= 19)
  alert(
    `청소년 비용은 ${bus[bus - 1]} 비용${bus_pay[bus_pay - 1] * 0.7} 입니다`
  );
