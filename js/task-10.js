function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector('#controls input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxesContainer = document.querySelector('#boxes');
function createBoxes(amount) {
  const boxes = [];
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    const size = 30 + i * 10;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }
  boxesContainer.append(...boxes);
}
function destroyBoxes() {
  boxesContainer.innerHTML = '';
}
createBtn.addEventListener('click', () => {
  const amount = Number(input.value);
  if (amount > 0) {
    createBoxes(amount);
  }
}
);
destroyBtn.addEventListener('click', destroyBoxes);
input.addEventListener('input', () => {
  const amount = Number(input.value);
  if (amount < 1) {
    input.value = '';
  }
});



  
