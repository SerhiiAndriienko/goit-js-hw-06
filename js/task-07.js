const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

const controlFontSizeInput = inputEl.addEventListener("input", onInput);

function onInput() {
  const inputValue = inputEl.value;
  textEl.style.fontSize = `${inputValue}px`;
}
