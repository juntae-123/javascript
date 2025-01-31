// const menu = [
//   {
//     name: "부대찌개",
//     price: 13000,
//     kcal: 700,
//     ingredients: ["햄", "라면", "파", "두부"],
//   },
//   { name: "죽", price: 4000, kcal: 200, ingredients: ["소고기", "밥", "물"] },
//   {
//     name: "샌드위치",
//     price: 0,
//     kcal: 400,
//     ingredients: ["고구마", "참치", "빵", "치즈"],
//   },
//   {
//     name: "해장국",
//     price: 10000,
//     kcal: 700,
//     ingredients: ["뼈다귀", "시래기", "감자"],
//   },
// ];

// const menuPay = (x) => {
//   x.price = x.price * 1.1;
//   return x;
// };

// const newMenu = menu.map(menuPay);
// console.log(newMenu);

// const menuKcal = (y) => {
//   y.kcal = y.kcal + 100;
//   y.ingredients.push("설탕");
//   return y;
// };

// const aaa = menu.map(menuKcal);
// console.log(aaa);

// const beee = (v) => x.ingredients.every((v) => v != "햄" && v != "소고기");
// const asda = menu.filter(beee);
// console.log(asda);

const starbucks = [
  {
    name: "카페모카",
    price: 6000,
    shots: 2,
    ingredients: ["커피콩", "물", "초코"],
  },
  {
    name: "레몬에이드",
    price: 4000,
    shots: 0,
    ingredients: ["레몬", "사이다", "시럽"],
  },
  {
    name: "아메리카노",
    price: 3000,
    shots: 2,
    beans: ["커피콩", "물", "케냐"],
  },
  {
    name: "자몽허니블랙티",
    price: 4000,
    shots: 0,
    beans: ["자몽", "꿀", "홍차"],
  },
  {
    name: "화이트초코",
    price: 5000,
    shots: 1,
    beans: ["크림", "초코", "우유", "얼음"],
  },
];

// const shot1 = (x) => x.shot == 0;
// const aaa = starbucks.filter(shot1);
// console.log(aaa);

// const coffeeU = (v) =>
//   (v.price = v.ingredients.some((v) => v == "커피콩")
//     ? v.price * 0.8
//     : v.price);
// const sss = starbucks.map(coffeeU);

const honey = (y) =>
  y.ingredients.some((y) => y == "꿀")
    ? y.ingredients
    : y.ingredients.push("꿀") || y.name.push("꿀♥") || y.price + 300;

const aaa = starbucks.map(honey);
console.log(aaa);

// const honeys = (y) =>
//     if(
//         y.ingredients.incloud("꿀");
//         y.ingredients.push("꿀");
//         y.name.push("꿀♥");
//         y.price + 300;
//     );

const aaas = starbucks.map(honey);
console.log(aaa);

//String -> Array
const arr = "엄준식".split(" ");
const arr1 = [..."엄준식"];

//Array -> String
["김밥", "천국"].join("");
