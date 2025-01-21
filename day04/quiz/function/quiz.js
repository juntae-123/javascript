// const starbucks = {
//   menu: [
//     { name: "아아", price: 4000 },
//     { name: "라떼", price: 4500 },
//     { name: "유자차", price: 4000 },
//   ],
//   sale: 0,
//   sellcoffee: function (num) {
//     if (menu[num] == undefined) console.log("메뉴가 없음");
//     else console.log(`${this.menu[num].name}이 판매되었습니다`);
//     this.sale = this.sale + this.menu[num].price;
//   },
//   add: function (a, b) {
//     console.log(`${a}메뉴가 추가되었습니다`);
//     this.menu.push({ name: a, price: b });
//   },
// };

// const magicuan = {
//   he: 100,
//   ma: 100,
//   lev: 1,
//   ex: 0,
//   getEx: function (ex) {
//     this.ex = this.ex + ex;
//     if (this.ex >= 100) {
//       this.lev = this.lev + 1;
//       this.ex = this.ex - 100;
//     }
//     console.log(`레벨업 현재 레벨${this.lev}`);
//   },
//   magicCLaw: function () {
//     if (this.ma < 10) {
//       console.log(`현재마나:${this.ma}이므로 마나 부족`);
//     } else {
//       this.ma = this.ma - 10;
//       this.getEx(10);
//       console.log("매직클로발동");
//     }
//   },
//   telePort: function () {
//     if (this.ma < 50) {
//       console.log(`현재마나:${this.ma}이므로 마나 부족`);
//     } else {
//       this.ma = this.ma - 50;
//       this.getEx(50);
//       console.log("텔레포트발동");
//     }
//   },
//   drinkPotion: function () {
//     this.ma = this.ma + 50;
//     this.ha = this.ha + 50;

//     console.log(`포션을마십니다 현재 체력${this.ha} 현재 마나${this.ma}`);
//   },
// };

// magicuan.magicCLaw();
// magicuan.telePort();
// magicuan.telePort();
// magicuan.drinkPotion();
// magicuan.telePort();

// const youtube = {
//   goo: ["ㅇㅇㅇ"],
//   like: ["ㄴㄴㄴ"],
//   ggoo: function (x) {
//     this.goo.push(x);
//   },
//   likeBu: function (a) {
//     this.like.push(a);
//   },
// };

// const car = {
//   name: "kia5",
//   speed: 0,
//   speedup: function (spu) {
//     this.speed = this.speed + spu;
//   },
//   speeddown: function () {
//     this.speed = this.speed ? this.speed - 1 : 0;
//   },
//   break: function (bre) {
//     this.break = 0;
//   },
//   printNowSpeed: function () {
//     console.log(`현재 속도는 ${this.speed}`);
//   },
// };

const calculator = {
  result: 0,
  history: [],
  add: function (num) {
    const sumHistory = `${this.result} + ${num} = ${this.result + num}`;
    this.result += num;
    this.history.push(sumHistory);
  },
  minus: function (num) {
    const subHistory = `${this.result} - ${num} = ${this.result - num}`;
    this.result -= num;
    this.history.push(subHistory);
  },
  multiply: function (num) {
    const mulHistory = `${this.result} * ${num} = ${this.result * num}`;
    this.result *= num;
    this.history.push(mulHistory);
  },
  divide: function (num) {
    if (x == 0) console.log("에러");
    else this.result /= num;
    const divHistory = `${this.result} / ${num} = ${this.result / num}`;
    this.history.push(divHistory);
  },
  square: function () {
    const squHistory = `${this.result}  ** 2  = ${this.result ** 2}`;
    this.result ** 2;
    this.history.push(squHistory);
  },
  clear: function () {
    result = 0;
  },
  showHistory: function () {
    console.log(`결과는 ${this.history}`);
  },
};
calculator.add(3);
calculator.showHistory();
