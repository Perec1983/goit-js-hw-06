const inputField = document.querySelector('#validation-input');

inputField.addEventListener('blur', onFocusChange);

function onFocusChange(event) {
    const symbolLength = inputField.dataset.length;
    
    const inputContentLength = inputField.value.length;

    if (inputContentLength === Number(symbolLength)) {
        inputField.classList.remove('invalid')
        inputField.classList.add('valid')
    } else {
        inputField.classList.remove('valid')
        inputField.classList.add('invalid')
    }
};
// const input = document.querySelector("#validation-input");

// input.addEventListener("blur", () => {
//   const desiredLength = input.dataset.length;
//   const inputLength = input.value.length;

//   if (inputLength === Number(desiredLength)) {
//     input.classList.add("valid");
//     input.classList.remove("invalid");
//   } else {
//     input.classList.add("invalid");
//     input.classList.remove("valid");
//   }
// });