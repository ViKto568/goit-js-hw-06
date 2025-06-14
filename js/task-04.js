let counterValue = 0;
const valueElement = document.querySelector('#value');
const incrementButton = document.querySelector('button[data-action="increment"]');
const decrementButton = document.querySelector('button[data-action="decrement"]');
const updateValue = () => {
    valueElement.textContent = counterValue;
}
incrementButton.addEventListener('click', () => {
    counterValue += 1;
    updateValue();
});
decrementButton.addEventListener('click', () => {
    counterValue -= 1;
    updateValue();
});