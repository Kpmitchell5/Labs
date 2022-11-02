function main() {
  let growParagraph = document.getElementById("grow-me");
  growParagraph.classList.add("big");
  let shrinkParagraph = document.getElementById("shrink-me");
  shrinkParagraph.classList.remove("big");
  let paras = document.querySelectorAll("li");
  console.log(paras[0].innerHTML);
  console.log(paras[1].innerHTML);
  console.log(paras[2].innerHTML);
  let brokeLink = document.getElementsByClassName("link");
  brokeLink.setAtttribute("href", "http://www.example.com");
  console.log(brokeLink);
  let hideMe = document.getElementById("hide-me");
  hideMe.style.display = "none";
  let showMe = document.getElementById("show-me");
  showMe.style.display = "block";
  let inputName = document.getElementById("name");
  let value = inputName.value;
  h1.innerHTML = value;
}
