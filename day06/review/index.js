const food = (img) => {
  return img + "pizza";
};
const threeWord = (word) => {
  Worker.repeat(3);
};

const Daoller = (won) => won / 1430;

const goToAcademy = (car) => {
  console.log("집에서 출발");
  car();
  console.log("학원 도착");
};

const texi = () => console.log("택시");
const bus = () => console.log("버스");
const wa = () => console.log("걷기");
const bi = () => console.log("자전거");
const momCar = () => console.log("엄마차");

goToAcademy(texi);

const makeBeverage = (coffee) => {
  console.log("콘솔 주문받기");
  coffee();
  console.log("콘솔 주문 완료");
};

const coffe = () => {
  console.log("1.원두갈기");
  console.log("2.평탄화하기");
  console.log("3.커피기계넣기");
  console.log("4.버튼 클릭");
  console.log("5.즙짜기");
};

const smu = () => {
  console.log("재료, 얼음, 갈기, 즙");
};
const tee = () => {
  console.log("티백, 뜨물, 후");
};

makeBeverage(coffe);
