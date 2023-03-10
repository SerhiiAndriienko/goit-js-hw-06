function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  amountOfBlocks: document.querySelector("input[type=number]"),
  createBtn: document.querySelector("button[data-create]"),
  removeBtn: document.querySelector("button[data-destroy]"),
  boxOfBlocks: document.querySelector("#boxes"),
  controlsEl: document.querySelector("#controls"),
};
refs.createBtn.addEventListener("click", createBoxes);
refs.removeBtn.addEventListener("click", destroyBoxes);

function createBoxes() {
  const widthHeigth = 30;
  const blockElement = [];

  for (let i = 0; i < refs.amountOfBlocks.value; i += 1) {
    blockElement[i] = document.createElement("div");
    blockElement[i].style.width = `${widthHeigth + i * 10}px`;
    blockElement[i].style.height = `${widthHeigth + i * 10}px`;
    blockElement[i].style.backgroundColor = getRandomHexColor();
    blockElement[i].classList.add("box-element");
  }
  refs.boxOfBlocks.append(...blockElement);
}
function destroyBoxes() {
  refs.boxOfBlocks.innerHTML = "";
}
