const textInput = document.querySelector('#validation-input');

textInput.addEventListener('blur', validateInput);
const inputLength = Number(textInput.dataset.length);

function validateInput() {
   if(textInput.value.length === inputLength){
    textInput.classList.add('valid');
    textInput.classList.remove('invalid');
  } else {
    textInput.classList.add('invalid');
    textInput.classList.remove('valid');
  }
};