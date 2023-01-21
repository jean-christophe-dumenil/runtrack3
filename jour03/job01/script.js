const showTextButton = document.querySelector('#show-text');
const hideTextButton = document.querySelector('#hide-text');
const text = document.querySelector('#text');

showTextButton.addEventListener('click', () => {
  text.style.display = 'block';
  showTextButton.style.display = 'none';
  hideTextButton.style.display = 'block';
});

hideTextButton.addEventListener('click', () => {
  text.style.display = 'none';
  hideTextButton.style.display = 'none';
  showTextButton.style.display = 'block';
});
