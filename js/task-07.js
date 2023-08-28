// const rangeInput = document.querySelector('#font-size-control');
// const text = document.querySelector('#text');

// rangeInput.addEventListeener('input', onRangeChange);

// function onRangeChange(event) {
//     const fontSize = event.target.value + 'px';
//     text.computedStyleMap.fontsize = fontSize
// }
const fontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

fontSizeControl.addEventListener('input', () => {
  const fontSize = fontSizeControl.value + 'px';
  text.style.fontSize = fontSize;
});