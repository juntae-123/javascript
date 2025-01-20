const menu = ["아아", "라떼", "초코"];
const soccer = ["손", "황", "이강인", "김민재"];

//배열 관련된 연산자

//1. indexing 연산자 (=꺼내기)
const test = [menu, soccer];
console.log(test[1][1]); //황
console.log(test[0][2]); //초코

//2. Destructuring 연산자(=분해)
const test1 = [...menu, ...soccer];
console.log(test1);

//3. Rest 연산자
const [son, ...rest] = soccer;
console.log(son);
console.log(rest);

const [son1, hwang] = soccer;
console.log(son1); // 손
console.log(hwang); //황

//4. add 및 update 연산자
soccer[4] = "박지성";
soccer[1] = "씨찬";
console.log[soccer];

//5. delete 연산자(=삭제)
delete soccer[3];
console.log[soccer];
