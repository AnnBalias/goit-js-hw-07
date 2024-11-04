const form = document.querySelector(".login-form");
form.addEventListener("submit", handSub);

function handSub(event) {
  event.preventDefault();
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  if (email === "" || password === "") {
    alert("All form fields must be filled in");
    return;
  }
  console.log(`{Email: ${email.trim()}, Password: ${password.trim(password)}}`);
  form.reset();
  return;
}
