const toUpper = (word) => word.toUpperCase();

const test = (a) => {};

const cook = (num) => {
  console.log("요리시작!");
  if (num == 1) console.log("된장국");
  else if (num == 2) console.log("김치찌개");
  else if (num == 3) console.log("짜파개티");
  else if (num == 4) console.log("가자미튀김");
  else if (num == 5) console.log("비엔나소세지");
  else if (num == 6) console.log("라면");
  else console.log("그런거 없음");
  console.log("요리끝");
};

const skill = (allsk) => {
  console.log("스킬 준비");
  allsk();
  console.log("완료!");
};

const ice = () => {
  console.log("얼음 마법");
};

const fir = () => {
  console.log("불 마법");
};
const li = () => {
  console.log("번개 마법");
};

skill(ice);
