const id = prompt("만들 아이디");

if (id.length < 4 || id.length > 16) alert("길이 유효하지않음");
else if (
  !(id.includes("!") || id.include("@") || id.include("#") || id.include("$"))
)
  alert("특수문자 포함해야함");
else if (
  id.slice(id.length - 1, id.length) !=
  id.slice(id.length - 1, id.length).toUpperCase()
)
  alert("마지막 앞파벳은 대문자");
else alert("아이디 완성!");
