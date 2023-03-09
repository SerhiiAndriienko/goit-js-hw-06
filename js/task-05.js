const inputEL = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

const onInputEl = inputEL.addEventListener("input", (event) => {
  if (event.currentTarget.value !== "") {
    spanEl.textContent = event.currentTarget.value;
  } else {
    spanEl.textContent = "Anonymous";
  }
});
