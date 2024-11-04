const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", (event) => {
  const name = input.value.trim();
  output.textContent = name || "Anonymous";
});
