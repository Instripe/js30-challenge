/*jshint esversion: 6 */

function runClock() {
  const currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();
  const hourHand = document.getElementsByClassName('hour-hand')[0];
  const minHand = document.getElementsByClassName('min-hand')[0];
  const secondHand = document.getElementsByClassName('second-hand')[0];
  hourHand.style.transform = `rotate(${90 + 360/12 * hours}deg)`;
  minHand.style.transform = `rotate(${90 + 360/60 * minutes}deg)`;
  secondHand.style.transform = `rotate(${90 + 360/60 * seconds}deg)`;
}

setInterval(runClock, 1000);
