'use strict';

const welcome = document.querySelector('#welcome');
const letter = document.querySelector('#letter-view');
const openButton = document.querySelector('#open-letter');
openButton.addEventListener('click', () => {
  welcome.hidden = true;
  letter.hidden = false;
  letter.classList.add('is-entering');
  window.scrollTo({ top: 0, behavior: 'instant' });
  document.querySelector('#letter-title').focus({ preventScroll: true });
});

const messages = [
  ['Masz w sobie więcej magii, niż myślisz.', '(^_^) <3'],
  ['Mały krok też jest krokiem. Dasz radę, Lusiu!', '(^-^)b'],
  ['Przesyłam Ci przytulasa na cały dzień.', '(>^_^)>'],
  ['Nie musisz robić wszystkiego naraz. Jestem po Twojej stronie.', '(=^.^=)'],
  ['Świat jest piękniejszy, bo jesteś w nim Ty.', '(*^_^*) <3'],
  ['Jesteś moim ulubionym powodem do uśmiechu.', ':) <3']
];
let messageIndex = 0;
document.querySelector('#more-love').addEventListener('click', () => {
  messageIndex = (messageIndex + 1) % messages.length;
  const [message, face] = messages[messageIndex];
  const faceElement = document.createElement('span');
  faceElement.className = 'ascii';
  faceElement.textContent = face;
  document.querySelector('#encouragement').replaceChildren(document.createTextNode(message + ' '), faceElement);
});
