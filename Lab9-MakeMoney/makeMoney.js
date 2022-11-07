const moneyForm = document.querySelector(".moneyForm");
const coinContainer = document.querySelector(".coinContainer");
const button = document.querySelector(".button");
//

moneyForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let amount = document.querySelector("#amount").value;
  let type = document.querySelector("#type").value;
  for (let i = 0; i < amount; i++) {
    const newCoin = document.createElement("li");
    newCoin.textContent = type;
    newCoin.classList.add("coin", type);
    coinContainer.append(newCoin);
    newCoin.addEventListener("click", () => {
      newCoin.remove();
    });
  }
});

// button.forEach((item) => {
//     let sum = 0;
//     let totalParagraph = coinContainer;
//   item.addEventListener("click", () => {
//     sum += parseInt(item.getAttribute());
//     totalParagraph.textContent = `Total: $${sum}`;
//   });
// });
