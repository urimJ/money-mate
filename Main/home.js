const container = document.querySelector(".container");
const titleBox = document.querySelector(".title")

const name = localStorage.getItem("name");

titleBox.innerHTML = name + "'s accounts";