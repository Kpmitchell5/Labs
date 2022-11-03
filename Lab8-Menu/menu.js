let numberlink = document.getElementById("nmbrs");
let letterlink = document.getElementById("ltrs");
let allNumbers = document.getElementsByClassName("listN");
let letters = document.querySelector(".   listL");

allNumbers.style.display = "none";

numberlink.addEventListener("click", (e) => {
  e.target.classList.toggle("clicked");
});

letterlink.addEventListener("click", (e) => {});
