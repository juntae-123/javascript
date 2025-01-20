const user_mbti = prompt("mbti 입력");
const first = user_mbti.slice(0, 1).toUpperCase();
const second = user_mbti.slice(1, 2).toUpperCase();
const third = user_mbti.slice(2, 3).toUpperCase();
const fourth = user_mbti.slice(3, 4).toUpperCase();
const mbtiobj = {
  E: "외향적",
  I: "내향적",
  S: "감각적",
  N: "직관적",
  T: "이성적",
  F: "감성적",
  J: "계획적",
  P: "즉흥적",
};
alert(
  `${mbtiobj[first]} ${mbtiobj[second]} ${mbtiobj[third]} ${mbtiobj[fourth]}`
);

const user_email = prompt("이메일 입력");
const hasAt = user_email.includes("@");
const hasDot = user_email.includes(".com") || user_email.includes(".net");
const hasDomain =
  user_email.includes("naver") ||
  user_email.includes("kakao") ||
  user_email.includes("yahoo") ||
  user_email.includes("paran");
hasAt && hasDot && hasDomain
  ? alert("이메일 타당")
  : alert("이메일 타당하지 않음");

// if (!user_email.includes("@")) alert("이메일 아님");
// else if (!user_email.includes(".com") || !user_email(".net"))
//   alert("이메일 아님");
// else if (
//   !user_email.includes("naver") ||
//   !user_email.includes("kakao") ||
//   !user_email.includes("yahoo") ||
//   !user_email.includes("paran")
// )
//   alert("이메일 아님");
// else alert("이메일 타당함!");

const num = 100;
