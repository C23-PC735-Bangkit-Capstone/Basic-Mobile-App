// JavaScript for real-time clock update
function updateClock() {
  const clockElement = document.getElementById('clockElement');
  const currentTime = new Date();
  const hours = String(currentTime.getHours()).padStart(2, '0');
  const minutes = String(currentTime.getMinutes()).padStart(2, '0');
  const timeString = `${hours}.${minutes}`;
  clockElement.textContent = timeString;
}
updateClock();
setInterval(updateClock, 1000);

// JavaScript for Card Accordion
const accordions = document.querySelectorAll('.card');
accordions.forEach((accordion) => {
  const heading = accordion.querySelector('.card-header');
  const content = accordion.querySelector('.card-body');

  heading.addEventListener('click', () => {
    heading.classList.toggle('show');
    content.classList.toggle('show');

    if (content.classList.contains('show')) {
      content.style.maxHeight = content.scrollHeight + 'px';
    } else {
      content.style.maxHeight = null;
    }
  });
});

// JavaScript for CycleButton
const cycleButtons = document.querySelectorAll('.cycleButton');
cycleButtons.forEach((cycleButton) => {
  const button = cycleButton.querySelector('.cycleButton_btn');

  button.addEventListener('click', function () {
    event.stopPropagation();
    cycleButton.classList.toggle('started');

    if (cycleButton.classList.contains('started')) {
      button.textContent = 'Sudahi Siklus';
      button.setAttribute('type', 'Started');
    } else {
      button.textContent = 'Mulai Siklus';
      button.setAttribute('type', 'Stopped');
    }
  });
});
