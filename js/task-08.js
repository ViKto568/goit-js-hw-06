const form = document.querySelector("form.login-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const { elements: { email, password } } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("All fields must be filled out");
    return;
  }

  const formData = {
    email: email.value,
    password: password.value,
  };

  console.log(formData);
  form.reset();
});
