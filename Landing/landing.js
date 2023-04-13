const form = document.querySelector(".form");
const input = form.querySelector("#name-input");

form?.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = input.value;
  localStorage.setItem("name", name);
  window.location.href = "../Main/home.html";
  console.log(name);
});

