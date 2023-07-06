const textInput = document.querySelector("#font-size-control");
const spanElement = document.querySelector('#text');

textInput.addEventListener('input', changeSize);
function changeSize() {
  spanElement.style.fontSize = `${textInput.value}px`;
}