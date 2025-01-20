//자바스크립트에서는 함수를 일급 객체[타입]로 취급

// array, object, function
// const a = [];
// const b = {};
// const c = function(){
//     return a + b;
// };

// const subway = {
//     name: "부평점 서브웨이",
//     sale: 0,
//     sellBread: function(){
//         this.sale = this.sale + 1000;
//     },
//     printsale: function(){
//         console.log(this.sale);
//     },
// };

// subway.sellBread();
// subway.printsale();

const baskinRabbins = {
  icecream: [
    { name: "민트초코", price: 2000 },
    { name: "엄마는외계인", price: 2500 },
    { name: "맏형", price: 4000 },
  ],
  sale: 0,
  sellIcecream: function (num) {
    if (this.icecream[num] == undefined) console.log("번호 없음");
    else {
      console.log(`${this.icecream[num].name}아이스크림이 판매되었습니다`);
      this.sale = this.sale + this.icecream[num].price;
    }
  },
  printSale: function () {
    console.log(`현재 매출:${this.sale}`);
  },
  addicecream: function (name, price) {
    this.icecream.push({ name: name, price: price });
  },
};

baskinRabbins.sellIcecream(0);
baskinRabbins.sellIcecream(2);
baskinRabbins.printSale();
baskinRabbins.sellIcecream(3);
baskinRabbins.addicecream("치즈케잌", 3500);
baskinRabbins.sellIcecream(3);
baskinRabbins.printSale();
