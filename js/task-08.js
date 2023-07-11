const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Alert! Please fill in all the fields!");
  }
  else {
    const loginForm = {};
    loginForm.email = email.value;
    loginForm.password = password.value;
    console.log(loginForm);
    event.currentTarget.reset();
  }
}

