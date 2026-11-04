'use strict';

const welcome = document.querySelector('#welcome');
const letter = document.querySelector('#letter-view');
const openButton = document.querySelector('#open-letter');
const motionButton = document.querySelector('.motion-toggle');
const motionLabel = document.querySelector('#motion-label');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let calm = reducedMotion.matches;

function setCalm(value) {
  calm = value;
  document.documentElement.classList.toggle('calm', calm);
  motionButton.setAttribute('aria-pressed', String(calm));
  motionLabel.textContent = calm ? 'spokojny tryb: wł.' : 'spokojny tryb';
}

setCalm(calm);
motionButton.addEventListener('click', () => setCalm(!calm));
reducedMotion.addEventListener('change', event => setCalm(event.matches));

openButton.addEventListener('click', () => {
  welcome.hidden = true;
  letter.hidden = false;
  letter.classList.add('is-entering');
  window.scrollTo({ top: 0, behavior: 'instant' });
  document.querySelector('#letter-title').focus({ preventScroll: true });
});

document.querySelector('#replay').addEventListener('click', () => {
  letter.hidden = true;
  letter.classList.remove('is-entering');
  welcome.hidden = false;
  window.scrollTo({ top: 0, behavior: 'instant' });
  openButton.focus({ preventScroll: true });
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
