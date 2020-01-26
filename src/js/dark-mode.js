// Global Variables
const toggle = document.getElementById('toggle-slider');

// Adding event listener to the toggle
toggle.addEventListener('change', () => {
  document.body.classList.toggle('dark');
});

// Getting data
const date = new Date();
const hours = date.getHours();
const isDarkModeEnabled = document.body.classList.contains('dark');

// Enabling the dark mode if hours are less than 6 or greater than 20
if ((hours < 6 || hours > 20)
  && !isDarkModeEnabled) {
  toggle.click();
}
