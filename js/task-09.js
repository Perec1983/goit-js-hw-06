const button = document.querySelector('.change-color');
const bodyStyle = document.querySelector('body');
const nameColor = document.querySelector('.color');

button.addEventListener('click', onClickButton);

function onClickButton() {
  bodyStyle.style.backgroundColor = getRandomHexColor();
}

function backgroundColorBtnHandler(event) {
  document.body.style.backgroundColor = textContainer.textContent
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
