const arr = [1, 3, 5, 7, 9];

//★중요★
//요소들을 바꿔주는 함수
// const aa = (num) => num * 2;
// const newArr = arr.map(aa);
//  console.log(newArr);

// const plus = (x) => x + 10;
// const dasa = arr.map(plus);
//  console.log(dasa);

// const dddd = (a) => (a ** 2 < 10 ? "짜장면" : "탕수육");
//  const asd = arr.map(dddd);

// const qwe = (z) => (z ** 3 < 100 ? "커피" : "붕어빵");
// const www = arr.map(qwe);
//  console.log(www);

// const fruits = [
//   "peach",
//   "mango",
//   "strawberry",
//   "apple",
//   "orange",
//   "mandarin",
//   "plum",
//   "persimmon",
//   "fig",
// ];
// const fruitsLen = (word) =>
//   word.length >= 6 ? word + "파란하트" : word + "깨진하트";
// const frui = fruits.map(fruitsLen);
// console.log(frui);

// const changLen = (fru) =>
//   fru.length * 2 < 15 ? "과일이름 짧음" : "과일이름 김";
// const a = fruits.map(changLen);
// console.log(a);

//요소중에 하나라도 있으면 true 없으면 false
// const sumNum = (s) => s == 3;
// const w = arr.some(sumNum);
// console.log(w);

// const unde = (x) => x < 5;

// const doaa = (x) => x % 2 == 0;
// const a = arr.some(doaa);
// console.log(a);

const fruits = [
  "peach",
  "mango",
  "strawberry",
  "apple",
  "orange",
  "mandarin",
  "plum",
  "persimmon",
  "fig",
];

const fruitName = (x) =>
  x.startsWith("k") || x.startsWith("b") || x.startsWith("s");
const fruit = fruits.some(fruitName);
console.log(fruit);

const nameLeng = (a) => a.length >= 4 && a.length <= 12;
const nameLe = fruits.some(nameLeng);
console.log(nameLe);

const fruitNamess = (z) =>
  z.includes("i") || z.includes("o") || z.includes("u") ? "노랑하트" : "폭죽";
const naa = fruits.map(fruitNamess);
console.log(naa);

const song = `Ooh
I, I just woke up from a dream
Where you and I had to say goodbye
And I don't know what it all means
But since I survived, I realized
Wherever you go, that's where I'll follow
Nobody's promised tomorrow
So I'ma love you every night like it's the last night
Like it's the last night
If the world was ending, I'd wanna be next to you
If the party was over and our time on Earth was through
I'd wanna hold you just for a while and die with a smile
If the world was ending, I'd wanna be next to you
Ooh
Oh, lost, lost in the words that we scream
I don't even wanna do this anymore
'Cause you already know what you mean to me
And our love's the only war worth fighting for
Wherever you go, that's where I'll follow
Nobody's promised tomorrow
So I'ma love you every night like it's the last night
Like it's the last night
If the world was ending, I'd wanna be next to you
If the party was over and our time on Earth was through
I'd wanna hold you just for a while and die with a smile
If the world was ending, I'd wanna be next to you
Right next to you
Next to you
Right next to you
Oh-oh, oh
If the world was ending, I'd wanna be next to you
If the party was over and our time on Earth was through
I'd wanna hold you just for a while and die with a smile
If the world was ending, I'd wanna be next to you
If the world was ending, I'd wanna be next to you
Ooh
I'd wanna be next to you
`;

const bilsd = song
  .split(" ")
  .map((word) => (word.length >= 6 ? "노란하트" : word))
  .join(" ");
console.log(bilsd);

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const six = (x) => x >= 6;
const newArr3 = numArr.filter(six);
console.log({ newArr3 });

const dooo = (x) => x ** 2 < 100;
const newArr4 = numArr.filter((x) => x ** 2 < 100).map((x) => +10);
