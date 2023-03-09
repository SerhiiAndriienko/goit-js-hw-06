const counterValue = {
  count: 0,
};

const btnDecrement = document.querySelector("button[data-action=decrement]");
const textValue = document.querySelector("#value");
const btnIncrement = document.querySelector("button[data-action=increment]");

btnDecrement.addEventListener("click", () => {
  counterValue.count -= 1;
  textValue.textContent = counterValue.count;
});
btnIncrement.addEventListener("click", () => {
  counterValue.count += 1;
  textValue.textContent = counterValue.count;
});
