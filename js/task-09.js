function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const hexColorOfBody = document.querySelector(".color");

changeColorBtn.addEventListener("click", ocChangeColorBtn);

function ocChangeColorBtn() {
  const randomColor = `${getRandomHexColor()}`;
  document.body.style.backgroundColor = randomColor;
  hexColorOfBody.textContent = randomColor;
}
