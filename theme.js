console.log("Theme script loaded");
const darkModeToggle = document.getElementById('darkModeToggle');

// Add an event listener to toggle dark mode
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});


const style = document.createElement('style');
style.innerHTML = `
  .dark-mode {
    background-color: #121212;
    color: #ffffff;
  }
  .dark-mode .btn {
    background-color: #ffffff;
    color: #121212;
  }
`;
document.head.appendChild(style);

// Scroll-to-Top Button
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
});

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Countdown Timer
const countdownDate = new Date("2025-05-01T00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  if (distance < 0) {
    document.getElementById("timer").innerHTML = "Offer Expired!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}

setInterval(updateCountdown, 1000);