const refs = {
  formEl: document.querySelector(".login-form"),
  inputEmail: document.querySelector("input[type=email]"),
  inputName: document.querySelector("input[type=password]"),
};
const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  if (refs.inputEmail.value === "" || refs.inputName.value === "") {
    alert("You must fill all fields");
    return;
  }
  const formElements = event.currentTarget.elements;
  const userInfo = {
    email: formElements.email.value,
    password: formElements.password.value,
  };
  console.log(userInfo);
  event.currentTarget.reset();
}
