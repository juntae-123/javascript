const num = +prompt("영화 번호 입력");
const age = +prompt("나이 입력");
const movie_name = ["액션영화", "로맨틱코미디", "공포영화"];
const movie_pay = [10000, 8000, 9000];

if (age < 13)
  alert(
    `나이는${age}고 선택한 영화는 ${movie_name[num - 1]}비용은 ${
      movie_pay[num - 1] * 0.5
    }`
  );
else if (age >= 60)
  alert(
    `나이는${age}고 선택한 영화는 ${movie_name[num - 1]}비용은 ${
      movie_pay[num - 1] * 0.3
    }`
  );
else movie_pay - 1;
