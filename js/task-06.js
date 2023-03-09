const inputEl = document.querySelector("#validation-input");
const amountOfSymbol = inputEl.dataset.length;

function onBlur() {
  if (inputEl.value.length !== Number(amountOfSymbol)) {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  } else {
    inputEl.classList.remove("invalid");
    inputEl.classList.toggle("valid");
  }
}

inputEl.addEventListener("blur", onBlur);
