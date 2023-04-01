const form = document.querySelector(".formControl");
const nameInput = document.getElementById("name-input");

console.log(document.getElementsByClassName("form"));

form?.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = nameInput.value;
  localStorage.setItem("name", name);
  window.location.href = "main.html";
});
