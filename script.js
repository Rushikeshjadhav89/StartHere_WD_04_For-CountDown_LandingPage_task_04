const eventDate = new Date(2024, 11, 31);

const countdownElement = document.getElementById('countdown');
const rsvpButton = document.getElementById('rsvpBtn');
const rsvpForm = document.getElementById('rsvpForm');
const rsvpMessage = document.getElementById('rsvpMessage');

function updateCountdown() {
  const currentDate = new Date();
  const difference = eventDate - currentDate;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (difference < 0) {
    clearInterval(interval);
    countdownElement.innerHTML = 'Event has passed';
    rsvpButton.disabled = true;
  }
}

function toggleForm() {
  rsvpForm.style.display = rsvpForm.style.display === 'none' ? 'block' : 'none';
}

function handleFormSubmit(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  rsvpMessage.innerHTML = `Thank you, ${name}! Your RSVP has been submitted.`;
  rsvpForm.reset();
}

updateCountdown();
const interval = setInterval(updateCountdown, 1000);

rsvpButton.addEventListener('click', toggleForm);
rsvpForm.addEventListener('submit', handleFormSubmit);
