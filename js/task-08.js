const form = document.querySelector("form.login-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value.trim() === "" || password.value.trim() === "") {
    alert("All fields must be filled!");
    return;
  }

  const formData = {
    email: email.value,
    password: password.value,
  };

  console.log(formData);
  event.currentTarget.reset();
});  