/*jshint esversion: 6 */
const hourHand = document.getElementsByClassName('hour-hand')[0];
const minHand = document.getElementsByClassName('min-hand')[0];
const secondHand = document.getElementsByClassName('second-hand')[0];

// Temporary disables transition on the seconds hand (after full circle)
function fixTransition(seconds) {
  if (seconds === 0) {
    secondHand.classList.add('notransition');
  } else if (seconds === 1) {
    secondHand.classList.remove('notransition');
  }
}

function runClock() {
  const currentTime = new Date();

  const hours = currentTime.getHours();
  hourHand.style.transform = `rotate(${90 + 360/12 * hours}deg)`;

  const minutes = currentTime.getMinutes();
  minHand.style.transform = `rotate(${90 + 360/60 * minutes}deg)`;

  const seconds = currentTime.getSeconds();
  secondHand.style.transform = `rotate(${90 + 360/60 * seconds}deg)`;
  fixTransition(seconds);
}

setInterval(runClock, 1000);
