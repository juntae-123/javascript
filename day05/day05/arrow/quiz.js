// function add(x, y) {
//   return x + y;
// }

// function minus(a, b) {
//   return a - b;
// }

// function hell(s) {
//   return `${s}님 안녕`;
// }

// function tolength(len) {
//   return `${len}문자: ${len.length}`;
// }

// function sqyare_three(x) {
//   return x ** 2 * 3;
// }
// function lunch_menu(menu) {
//   return `점심메뉴 ${menu} 입니다.`;
// }

// function allergy_test(aller) {
//   const shie = aller.includes("새우");
//   const shiw = aller.includes("땅콩");
//   const shiq = aller.includes("조개");

//   return shie || shiw || shiq ? "알러지" : "없음";
// }

// function threeToArray(x, z, b) {
//   return [x, z, b];
// }

// function getIphon(a, b, c) {
//   return { version: a, model: b, storage: c };
// }

// function gaa(a) {
//   if (a == 90) return "직각";
//   else if (a == 180) return "평각";
//   else if (a > 0 || a < 90) return "예각";
//   else return "둔각";
// }

// function danda(s, g) {
//   return s.split(g)[0].toUpperCase();
// }

function daa(a) {
  return a.length >= 4 || a.length <= 10 ? "길이유효" : "유효하지않음";
}
