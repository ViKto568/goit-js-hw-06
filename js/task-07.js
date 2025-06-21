const inputFontSize = document.querySelector('#font-size-control');
const textOutput = document.querySelector(`#text`);
inputFontSize.addEventListener('input', (event) => {
  const fontSize = event.currentTarget.value;
  textOutput.style.fontSize = `${fontSize}px`;
});
