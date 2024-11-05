const input = document.querySelector("input");
const create = document.querySelector("button[data-create]");
const destroy = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

create.addEventListener("click", createBoxes);
destroy.addEventListener("click", destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  if (input.value < 1 || input.value > 100) {
    return;
  }
  boxes.innerHTML = "";
  const BoxArr = [];
  for (let i = 0; i < input.value; i++) {
    const item = document.createElement("div");
    item.style.backgroundColor = getRandomHexColor();
    item.style.width = `${30 + i * 10}px`;
    item.style.height = `${30 + i * 10}px`;
    BoxArr.push(item);
  }
  boxes.append(...BoxArr);
  input.value = "";
  return;
}

function destroyBoxes() {
  boxes.innerHTML = "";
  input.value = "";
  return;
}
