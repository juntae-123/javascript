const arr = [1, 3, 5, 7, 9];

arr.map((x) => x + 1);

const arr1 = Array(1001)
  .fill(0)
  .map((x, i) => i);

const arr2 = Array(101)
  .fill(0)
  .map((x, i) => i)
  .filter((x) => x % 5 == 0);
console.log(arr2);

const arr3 = Array(101)
  .fill(0)
  .map((x, i) => i)
  .map((x) => {
    if (x % 3 == 0 && x % 5 == 0) return "토";
    else if (x % 3 == 0) return "쥐";
    else if (x % 5 == 0) return "돼";
    else return x;
  });

//console.log(arr3);
const makeZodiac = (to, from) => {
  const zodiac = {
    0: "원숭이",
    1: "닭",
    2: "개",
    3: "돼지",
    4: "쥐",
    5: "소",
    6: "호랑이",
    7: "토끼",
    8: "용",
    9: "뱀",
    10: "말",
    11: "양",
  };

  return Array(from - to)
    .fill(0)
    .map((x, i) => i + to)
    .map((x) => {
      return { 연도: x, 띠: zodiac[x % 12] };
    });
};

const result = makeZodiac(1000, 3000);
console.log(result);
