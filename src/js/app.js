import './dark-mode';

// Global Variables
const buttons = document.querySelectorAll('button');
const findInput = document.querySelector('input[name="find"]');
const replaceInput = document.querySelector('input[name="replace"]');
const text = document.getElementById('input');

let originalText = text.innerText;

/**
 * Finds the value in the text and wrap the value in span tag
 */
const find = () => {
  const { value } = findInput;
  if (!value) return;
  // finding the value
  const regex = new RegExp(value, 'g');
  const markup = text.innerText.replace(regex, `<span class="find">${value}</span>`);
  text.innerHTML = markup;
};

/**
 * Replaces the value in the text
 */
const replace = () => {
  const findValue = findInput.value;
  const replaceValue = replaceInput.value;
  if (!replaceValue || !findValue) return;
  // replacing the text
  const regex = new RegExp(findValue, 'g');
  const markup = originalText.replace(regex, `${replaceValue}`);
  text.innerHTML = markup;
  originalText = text.innerText;
  // Calling find again
  find();
};

// Resetting the text on input change in findInput element
findInput.addEventListener('input', () => {
  text.innerHTML = originalText;
});

// Adding event listeners to the buttons
buttons.forEach((button) => {
  if (button.dataset.target === 'find') {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      find();
    });
  }
  if (button.dataset.target === 'replace') {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      replace();
    });
  }
});

// updating the originalText value when p tag's value is changed
text.addEventListener('input', (e) => {
  if (originalText !== e.target.innerText.trim()) {
    originalText = e.target.innerText.trim();
  }
});
