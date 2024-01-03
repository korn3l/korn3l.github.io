const modal = document.getElementById("SignUpPopUp");
const btn = document.getElementById("SignButton");
const btn2 = document.getElementById("SignButton2");

btn.onclick = function () {
  modal.style.display = "flex";
  document.querySelector(".container").classList.toggle("container-blur");
};

btn2.onclick = function () {
  modal.style.display = "none";
  document.querySelector(".container").classList.toggle("container-blur");
};

window.onload = function () {
  document.getElementById("SignButton2").onclick = function () {
    window.location.href = "index.html";
  };
};
