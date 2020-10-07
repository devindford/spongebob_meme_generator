//* Grab items from DOM
const textOnImage = document.querySelector('.meme-text');
const textInput = document.querySelector('.meme-input');

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

//* Input Handler/Listener

textInput.addEventListener('input', e => memeThisText(e.target.value))
