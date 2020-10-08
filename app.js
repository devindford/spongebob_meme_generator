//* Grab items from DOM
const textOnImage = document.querySelector('.meme-text');
const textInput = document.querySelector('.meme-input');
const filterInputs = Array.from(document.querySelectorAll('[name="font-style"]'));

//* Pulls the text and changes it

function memeThisText(text) {
  const mod = Array.from(text).map(spongeBobCase);
  textOnImage.textContent = mod.join('');
  //*  downsize text on overflow
  if (mod.length >= 100) {
    textOnImage.classList.remove('is-size-1');
    textOnImage.classList.add('is-size-3');
  } else {

    textOnImage.classList.remove('is-size-3');
    textOnImage.classList.add('is-size-1');
  }

}

//* Converts the input text to meme format (SpongeBob Case)

function spongeBobCase(letter, index) {
  return index % 2 ? letter.toLowerCase() : letter.toUpperCase();
}

//*Change font styles

function fontStylingUpdate(input) {
  const filter = filterInputs.find((input) => input.checked).value;
  const noItalics = textOnImage.style.setProperty('--font-styling', 'normal');

  switch (filter) {
    case 'bold':
      textOnImage.style.setProperty('--font-weight', 'bolder');
      noItalics;
      break;
    case 'light':
      textOnImage.style.setProperty('--font-weight', 'lighter');
      noItalics;
      break;
    case 'standard':
      textOnImage.style.setProperty('--font-weight', 'normal');
      noItalics;
      break;
    case 'italic':
      textOnImage.style.setProperty('--font-weight', 'normal');
      textOnImage.style.setProperty('--font-styling', 'italic');
      break;
    default:
      break;
  }
}

//* Input Handler/Listener

textInput.addEventListener('input', e => memeThisText(e.target.value))
filterInputs.forEach((input) =>
  input.addEventListener('input', () => {
    fontStylingUpdate(input.value)
  })
);