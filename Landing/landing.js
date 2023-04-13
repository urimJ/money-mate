const form = document.querySelector(".form");
const input = form.querySelector("#name-input");

form?.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = input.value;
  if (name === localStorage.getItem("name")) {
    alert("이미 등록된 이름입니다. 해당 페이지로 이동합니다.")
    window.location.href = "../Main/home.html";
  } else if (name === "") {
    alert("이름을 입력해주세요.")
    return;
  } else {
    alert("정상적으로 등록되었습니다.")
    localStorage.removeItem("name")
    localStorage.setItem("name", name);
    window.location.href = "../Main/home.html";
  }
});

