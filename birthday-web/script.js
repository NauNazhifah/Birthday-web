const openLetterButton = document.getElementById('open-letter');
const closeLetterButton = document.getElementById('close-letter');
const letter = document.getElementById('letter');

const surpriseButton = document.getElementById('surprise-button');
const surpriseMessage = document.getElementById('surprise-message');
const closeSurpriseButton = document.getElementById('close-surprise');
const overlay = document.getElementById('overlay');

openLetterButton.addEventListener('click', () => {
  letter.hidden = false;
  letter.scrollIntoView({ behavior: 'smooth', block: 'start' });
  openLetterButton.textContent = 'Suratnya sudah dibuka 💗';
});

closeLetterButton.addEventListener('click', () => {
  letter.hidden = true;
  openLetterButton.textContent = 'Buka surat rahasia 💌';
  openLetterButton.focus();
});

function createConfetti() {
  const decorations = ['💗', '♡', '✿', '✨', '🎀', '🌸'];
  const amount = window.matchMedia('(max-width: 520px)').matches ? 28 : 48;

  for (let i = 0; i < amount; i += 1) {
    const piece = document.createElement('span');
    piece.className = 'confetti';
    piece.textContent = decorations[Math.floor(Math.random() * decorations.length)];
    piece.style.left = `${Math.random() * 100}vw`;
    piece.style.setProperty('--duration', `${2.2 + Math.random() * 2.2}s`);
    piece.style.setProperty('--size', `${14 + Math.random() * 15}px`);
    piece.style.setProperty('--drift', `${Math.random() * 160 - 80}px`);
    piece.style.animationDelay = `${Math.random() * 0.6}s`;
    document.body.appendChild(piece);
    piece.addEventListener('animationend', () => piece.remove(), { once: true });
  }
}

function openSurprise() {
  surpriseMessage.hidden = false;
  overlay.hidden = false;
  document.body.style.overflow = 'hidden';
  createConfetti();
  closeSurpriseButton.focus();
}

function closeSurprise() {
  surpriseMessage.hidden = true;
  overlay.hidden = true;
  document.body.style.overflow = '';
  surpriseButton.focus();
}

surpriseButton.addEventListener('click', openSurprise);
closeSurpriseButton.addEventListener('click', closeSurprise);
overlay.addEventListener('click', closeSurprise);

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !surpriseMessage.hidden) {
    closeSurprise();
  }
});
