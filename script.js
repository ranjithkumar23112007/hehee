const box = document.getElementById('giftBox');
const hint = document.getElementById('hintText');

box.addEventListener('click', () => {
  box.classList.toggle('opened');
  hint.textContent = box.classList.contains('opened') ? 'Surprise unlocked!' : 'Tap the gift box';
});

box.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    box.click();
  }
});
