const textInput = document.querySelector("#validation-input");
textInput.addEventListener("blur", (event) => {
  const inputLength = event.currentTarget.value.length;
  const requiredLength = Number(textInput.dataset.length);

  if (inputLength === requiredLength) {
    textInput.classList.remove("invalid");
    textInput.classList.add("valid");
  } else {
    textInput.classList.remove("valid");
    textInput.classList.add("invalid");
  }
});


