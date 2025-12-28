function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const amountInput = document.querySelector('input[type="number"]');
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

function createBoxes(amount) {
  boxesContainer.innerHTML = ''; 
  let boxSize = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
    boxSize += 10;
  }
}
createButton.addEventListener('click', () => {
  const amount = Number(amountInput.value);
  createBoxes(amount);
});

destroyButton.addEventListener('click', () => {
  boxesContainer.innerHTML = '';
});  
